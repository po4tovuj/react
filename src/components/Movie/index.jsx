import React, { Component } from 'react';
import "./styles.css";
import PropTypes from 'prop-types';

export default class Movie extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rate: PropTypes.number.isRequired,
    }
    render(){
        const { name, description, rate, gender } = this.props;
        return (
            <div>
                <h2 className="movie-card__title">{name}</h2>
                <p className="movie-card__description">{description}</p>
                <span className="movie-card__rate">Rating: {rate}/10</span>
                <ul className="gender-list">{gender.map(gender => (<li key={gender} className="gender-list__items">
                        {gender}
                </li>))}
                </ul>
                <button className="movie-card__btn movie-card__btn--del">delete</button>
            </div>
        );
    }
}