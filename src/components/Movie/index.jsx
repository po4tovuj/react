import React from 'react';
import "./styles.css";
import ChipsList from "./ChipsList";

const Movie = ({ name, description, rate, ...chips }) => {
    return (
        <li key={name} className="movie-card">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__description">{description}</p>
            <span className="movie-card__rate">Rating: {rate}/10</span>
            <ChipsList {...chips}> </ChipsList>
            <button className="movie-card__btn movie-card__btn--del">delete</button>
        </li>
    );
};
export default Movie
