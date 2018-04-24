import React from 'react';
import "./styles.css";
import ChipsList from "./ChipsList";

const Movie = ({ title, description, rate, handleMovieDelete, id, ...chips }) => {
    const handleClickDel = () => {
        handleMovieDelete(id);
    };
    return (
        <li key={title} className="movie-card">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__description">{description}</p>
            <span className="movie-card__rate">Rating: {rate}/10</span>
            <ChipsList {...chips}> </ChipsList>
            <button onClick={handleClickDel} className="movie-card__btn movie-card__btn--del">delete</button>
        </li>
    );
};
export default Movie
