import React, {Component }from 'react';
import './header.css';

export default class Header extends Component {
    render(){
        return (
            <header className="header">
                <div> <h1>Movie Mate</h1></div>
                <ul className="navigation">
                    <li className="navigation__item"><a className="navigation__link">about</a></li>
                    <li className="navigation__item"><a className="navigation__link" >browse</a></li>
                    <li className="navigation__item"><a className="navigation__link">login</a></li>
                </ul>
            </header>
        )
    }
}