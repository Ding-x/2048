import React, { Component } from 'react';
// import logo from './logo.svg';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <header className="Header-back">
                    {/*<img src={logo} className="Header-logo" alt="logo" />*/}
                    <h1 className="Header-title">Ding-X</h1>
                </header>
                <div className="topNav">
                    <Link className="active"> Home </Link>
                    <Link > Article </Link>
                    <Link > Music </Link>
                    <Link > Other </Link>

                </div>
            </div>
        );
    }
}

export default Header;