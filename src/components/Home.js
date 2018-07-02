import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div className="home">
                <Link to='/article'></Link>
                <p>A long way to go...</p>
            </div>

        );
    }

}

export default Home;