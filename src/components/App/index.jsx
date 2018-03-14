import React, { Component } from 'react';
import Header from '../Header';
import moviesArr from '../../movies.json';
import MovieForm from '../MovieForm';
import './styles.css';
import List from "../MovieList";
import v4 from 'uuid/v4';
let movies = moviesArr.map(movie=>({
    id: v4(),
    ...movie
}))
console.log(movies);

export default class App extends Component {

  render() {
      // const { items } = this.state;
    return (
        <div className="app">
        <Header />
            <div className="app__body">
            <List items={movies} />
            <MovieForm />
            </div>
        </div>
    );
  }
}

