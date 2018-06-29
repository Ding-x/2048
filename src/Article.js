import React, { Component } from 'react';
import './Article.css';

class Article extends Component{
    render(){
        return(
            <div className="article">
                <div className="article-content">
                    <h4>Why is Jianfen Zhao foolish</h4>
                    <hr/>
                    <p>
                        No reason
                    </p>
                </div>

                <div className="article-bar">
                    <div className="article-info">
                        By Xiao, Jun 28th, 2018
                    </div>
                    <div className="article-more">
                        <a onClick="">Read More...</a>
                    </div>
                </div>
            </div>

        );
    }
}

export default Article;