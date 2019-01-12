import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import './App.css';



class App extends Component {

    constructor(props){
        super(props)
        this.state={
            data: [[0,0,0,0],
                   [0,0,0,0], 
                   [0,0,0,0], 
                   [0,0,0,0]],
           
            end:false,
            score:0,
            init:false,
        }
    }

    componentDidMount(){
        window.addEventListener("keydown", this.move, false);
    }

    addScore(num){
        this.setState({score:this.state.score+num})
    }

    toLeft=()=>{
        var arr= this.state.data;
        var tmp=JSON.parse(JSON.stringify(arr));
        for(var x=0; x<arr.length;x++){
            var queue = [];
            for(var y=0;y<arr[0].length;y++){
                if(arr[x][y]!==0)
                    queue.push(arr[x][y])
                arr[x][y]=0
            }
            var index=0
            for(var z=0;z<queue.length;z++){
                if(queue[z]===queue[z+1]){
                    arr[x][index]=2*queue[z]
                    z++;
                    index++;
                    this.addScore(2*queue[z])
                }
                else{
                    arr[x][index]=queue[z]
                    index++
                }
            }            
        }

        if(!this.checkChange(arr,tmp)){
            this.setState({data:arr})
            this.addNew();
        }


    }

    toRight=()=>{
        var arr= this.state.data;
        var tmp=JSON.parse(JSON.stringify(arr));
        for(var x=0; x<arr.length;x++){
            var queue = [];
            for(var y=0;y<arr[0].length;y++){
                if(arr[x][y]!==0)
                    queue.push(arr[x][y])
                arr[x][y]=0
            }
            var index=arr[0].length-1
            for(var z=queue.length-1;z>=0;z--){
                if(queue[z]===queue[z-1]){
                    arr[x][index]=2*queue[z]
                    z--;
                    index--;
                    this.addScore(2*queue[z])
                }
                else{
                    arr[x][index]=queue[z]
                    index--
                }
            }            
        }


        if(!this.checkChange(arr,tmp)){
            this.setState({data:arr})
            this.addNew();
        }
    }

    toUp=()=>{
        var arr= this.state.data;        
        var tmp=JSON.parse(JSON.stringify(arr));
        for(var y=0; y<arr[0].length;y++){
            var queue = [];
            for(var x=0;x<arr.length;x++){
                if(arr[x][y]!==0)
                    queue.push(arr[x][y])
                arr[x][y]=0
            }

            var index=0
            for(var z=0;z<queue.length;z++){
                if(queue[z]===queue[z+1]){
                    arr[index][y]=2*queue[z]
                    z++;
                    index++;
                    this.addScore(2*queue[z])
                }
                else{
                    arr[index][y]=queue[z]
                    index++
                }
            }            
        }

        if(!this.checkChange(arr,tmp)){
            this.setState({data:arr})
            this.addNew();
        }
    }


    toDown=()=>{
        var arr= this.state.data;
        var tmp=JSON.parse(JSON.stringify(arr));
        for(var y=0; y<arr[0].length;y++){
            var queue = [];
            for(var x=0;x<arr.length;x++){
                if(arr[x][y]!==0)
                    queue.push(arr[x][y])
                arr[x][y]=0
            }

            var index=arr.length-1
            for(var z=queue.length-1;z>=0;z--){
                if(queue[z]===queue[z-1]){
                    arr[index][y]=2*queue[z]
                    z--;
                    index--;
                    this.addScore(2*queue[z])
                }
                else{
                    arr[index][y]=queue[z]
                    index--
                }
            }            
        }

        if(!this.checkChange(arr,tmp)){
            this.setState({data:arr})
            this.addNew();
        }
    }

    checkEmpty=()=>{
        var arr= this.state.data;
        var empty = [];
        for(var x=0; x<arr.length;x++){
            for(var y=0;y<arr[0].length;y++){
                if(arr[x][y]===0)
                    empty.push([x,y])
            }
        }
        return empty;
    }

    checkChange=(a,b)=>{

        for(var x=0; x<a.length;x++){
            for(var y=0;y<a[0].length;y++){
                if(a[x][y]!==b[x][y]){
                    return false
                }
                    
            }
        }
        return true;
    }

    addNew=()=>{
        var empty=this.checkEmpty();
        if(empty.length>0){
            this.setState({predata:this.state.data})
            var arr = this.state.data;
            var point = empty[Math.floor(Math.random() * empty.length )]
            var newNum = [2,2,2,2,4]
            arr[point[0]][point[1]]=newNum[Math.floor(Math.random() * newNum.length )]
            this.setState({data:arr})
        }
        else{
            this.setState({end:true})
        }
    }

    move=(e)=>{
        if(!this.state.end ){
            switch(e.keyCode) {
                case 37:
                  this.toLeft();
                  break;
                case 38:
                this.toUp();
                  break;
                case 39:
                this.toRight();
                  break;
                case 40:
                this.toDown();
                  break;
                default:
                  break;
            }

        }
        
        if(this.end()){this.setState({end:true})}
          
    }


    restart=()=>{
        var arr= this.state.data;
        for(var x=0; x<arr.length;x++){
            for(var y=0;y<arr[0].length;y++){
                arr[x][y]=0
            }
        }
        var i = Math.floor(Math.random() * 4)
        var j = Math.floor(Math.random() * 4)
        arr[i][j]=2
        this.setState({data:arr,end:false,score:0})
    }

    init=()=>{
        var x = Math.floor(Math.random() * 4)
        var y = Math.floor(Math.random() * 4)
        var arr = this.state.data;
        arr[x][y]=2
        this.setState({data:arr,end:false,score:0, init:true})
    }


    end=()=>{
        var arr= this.state.data;
        if(this.checkEmpty().length===0){
            for(var x=0; x<arr.length;x++){
                for(var y=0;y<arr[0].length;y++){
                    var top=x-1;
                    var right = y+1;
                    var bottom = x+1;
                    var left = y-1;
                    if(top>=0 && arr[top][y]===arr[x][y])
                        return false
                    if(bottom<4 && arr[bottom][y]===arr[x][y])
                        return false
                    if(left>=0 && arr[x][left]===arr[x][y])
                        return false
                    if(right<4 && arr[x][right]===arr[x][y])
                        return false
    
                }
            }
            return true;
        }
        else
            return false;
        
        

    }
  render() {

    return ( 
        <div className= "root" >
         <div className="score">Score: {this.state.score}</div>
        
        <div className= "frame" > 
       
      
            {this.state.data.map(row=>{
                return(
                    <div>{row.map(point=>{
                        const classname= "box"+point
                        return(
                            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} className={classname}>{point}</Animated>
                            
                        )
                    })}</div>
                )
            }
                

                )}

        </div>
        <div className="tool">
        {this.state.init?null: <button id="1" className="btn" onClick={this.init}>Start</button>}
        {this.state.end?<div><div className="end">End</div>
        <button id="2" className="btn" onClick={this.restart}>Restart</button></div>:null}
        <div>

        </div>
        </div>
      
         </div>);
  }
}

export default App;
