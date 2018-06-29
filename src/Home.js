import React, { Component } from 'react';
import './Home.css';
import Article from "./Article.js"

class Home extends Component{
    render(){
        return(
            <div className="home">
                <Article/><Article/><Article/><Article/>
            </div>
        );
    }

}

export default Home;