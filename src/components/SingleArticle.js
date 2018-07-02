import React, { Component } from 'react';
import './SingleArticle.css';

class SingleArticle extends Component{
    render(){
        return(
            <div className="singleArticle">
                <div className="singleArticle-content">
                    <h3>{this.props.title}</h3>
                    <hr/>
                    <p>
                        {this.props.content}
                    </p>
                </div>

                <div className="singleArticle-bar">
                    <div className="singleArticle-info">
                        By {this.props.author}, {this.props.time}
                    </div>
                    <div className="singleArticle-more">
                        <a>Read More...</a>
                    </div>
                </div>
            </div>

        );
    }
}

export default SingleArticle;