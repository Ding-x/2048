import React, { Component } from 'react';
import './Article.css';
import SingleArticle from './SingleArticle'

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!',time:"Jun 28th, 2018",author:"Xiao"},
    {id: 2, title: 'Installation', content: 'You can install React from npm.',time:"Jun 21th, 2018",author:"Lpn"},
    {id: 3, title: 'Why', content: 'Stupid.',time:"Jun 20th, 2018",author:"ZAUK"}
];

class Article extends Component{



    render(){
        return(
            <div className="article">
                {posts.map((post) =>{
                   return <SingleArticle title={post.title} content={post.content} time={post.time} author={post.author}/>
                })}

        </div>
        )
    }
}

export default Article;