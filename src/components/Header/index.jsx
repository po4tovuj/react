import React, {Component }from 'react';
import Logo from './logo';
import HeaderNav from './HeaderNav';
import './header.css';

export default class Header extends Component {
    render(){
        return (
            <header className="header">
                <Logo />
                <HeaderNav />
            </header>
        )
    }
}