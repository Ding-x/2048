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
            score:0
        }
    }

    addScore(num){
        this.setState({score:this.state.score+num})
    }

    toLeft=()=>{
        var arr= this.state.data;
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

        this.setState({data:arr})
    }

    toRight=()=>{
        var arr= this.state.data;
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

        this.setState({data:arr})
    }

    toUp=()=>{
        var arr= this.state.data;
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

        this.setState({data:arr})
    }


    toDown=()=>{
        var arr= this.state.data;
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

        this.setState({data:arr})
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

    move=(e)=>{

        if(!this.state.end){
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

            var empty=this.checkEmpty();
            if(empty.length>0){
                var arr = this.state.data;
                var point = empty[Math.floor(Math.random() * empty.length )]
                var newNum = [2,2,2,4]
                arr[point[0]][point[1]]=newNum[Math.floor(Math.random() * newNum.length )]
                this.setState({data:arr})
            }
            else{
                this.setState({end:true})
            }

        }
          
    }


    start=()=>{
        var arr= this.state.data;
        for(var x=0; x<arr.length;x++){
            for(var y=0;y<arr[0].length;y++){
                arr[x][y]=0
            }
        }
        this.setState({data:arr,end:false,score:0})
    }
  render() {



    return ( 
        <div className= "root" onKeyDown={this.move} tabIndex="0">
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
        <h1>{this.state.score}</h1>
        {this.state.end?<div><h1>end</h1>
        <button onClick={this.start}>Restart</button></div>:null}
         </div>);
  }
}

export default App;
