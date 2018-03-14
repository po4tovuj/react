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
    state = {
        items: movies,
    };
    handleMovieDelete = id => {
        this.setState (prevState => ({
            items: prevState.items.filter(item => item.id !== id)
        }));
    };
  render() {
      const { items } = this.state;
    return (
        <div className="app">
        <Header />
            <div className="app__body">
            <List items={items} handleMovieDelete={this.handleMovieDelete} />
            <MovieForm />
            </div>
        </div>
    );
  }
}

