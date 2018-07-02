import React, { Component } from 'react';
import './Header.css';
import { NavLink} from 'react-router-dom'

class Header extends Component{
    render(){
        return(

            <div className="Header">
                <header className="Header-back">
                    {/*<img src={logo} className="Header-logo" alt="logo" />*/}
                    <h1 className="Header-title">Ding-X</h1>
                    <p className="Header-intro">Programmer. Song-writer. </p>
                </header>
                <div className="topNav">
                    <div className="navLeft">
                        <NavLink exact to="/" className="nav"> Home </NavLink>
                        <NavLink to="/article" className="nav"> Article </NavLink>
                        <NavLink to="/music" className="nav"> Music </NavLink>
                        <NavLink to="/others" className="nav"> Other </NavLink>
                    </div>
                    <div className="navRight">
                        <NavLink id="signInNav" to="/signIn" className="nav"> SignIn </NavLink>
                    </div>

                </div>
            </div>
        );
    }

}

export default Header;