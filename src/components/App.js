import React, { Component } from 'react';
import './App.css';
import Footer from "./Footer";
import Home from "./Home"
import Article from "./Article"
import Header from "./Header"
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Header/>
                <Route exact path='/' component={Home} />
                <Route path='/article' component={Article} />
                <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;
