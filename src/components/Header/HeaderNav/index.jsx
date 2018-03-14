import React from 'react';
import './styles.css';

const headerNav = () => (
    <ul className="navigation">
        <li className="navigation__item"><a className="navigation__link">about</a></li>
        <li className="navigation__item"><a className="navigation__link" >browse</a></li>
        <li className="navigation__item"><a className="navigation__link">login</a></li>
    </ul>
);

export default headerNav;
