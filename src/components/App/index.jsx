import React, { Component } from 'react';
import Header from '../Header';
import Movie from '../Movie';
import movies from '../../movies.json';
import MovieForm from '../MovieForm';
import './styles.css';

console.log(movies);
export default class App extends Component {

  render() {
    return (
        <div className="app">
        <Header />
            <div className="app__body">
            <div className="movieList">
            {movies.map(movie => (
                <div key={movie.name} className="movie-card">
                    <Movie {...movie}/>
                </div>
            ))}
            </div>
            <MovieForm />
            </div>
        </div>
    );
  }
}

