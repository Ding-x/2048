import React, { Component } from 'react';
import Header from './Header'
import './App.css';
import Footer from "./Footer";
import Home from "./Home"

class App extends Component {
  render() {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <Home/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>


    );
  }
}

export default App;
