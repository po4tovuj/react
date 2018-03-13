import React, { Component } from 'react';
import './styles.css';

export default class MovieForm extends Component {
    render() {
        return (
            <form action="#" className="movie-form">
                <label className="movie-form__label">
                    Title
                    <input type="text" className="movie-form__input"/>
                </label>
                <label className="movie-form__label">
                    Description
                    <textarea className="movie-form__input movie-form__txtarea" rows="8">
                    </textarea>
                </label>
                <label className="movie-form__label">
                    Rating
                    <select className="movie-form__input">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </label>
                <button className="movie-form__submit" type="submit">submit</button>
            </form>
        );
    }
}