import React from 'react';
import "./styles.css";
// import PropTypes from 'prop-types';

const Movie = ({ name, description, rate, gender, handleMovieDelete }) => {
    const handleClickDel = () => {
        handleMovieDelete(name);
    }
    return (
        <div key={name} className="movie-card">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__description">{description}</p>
            <span className="movie-card__rate">Rating: {rate}/10</span>
            <ul className="gender-list">{gender.map(gender => (<li key={gender} className="gender-list__items">
                {gender}
            </li>))}
            </ul>
            <button onClick={handleClickDel} className="movie-card__btn movie-card__btn--del">delete</button>
        </div>
    );
}
    export default Movie