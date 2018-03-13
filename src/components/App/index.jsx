import React, { Component } from 'react';
import Header from '../Header';
import movies from '../../movies.json';
import MovieForm from '../MovieForm';
import './styles.css';
import List from "../MovieList";

console.log(movies);

export default class App extends Component {
    state = {
        items: movies,
    };
    handleMovieDelete = name => {
        this.setState (prevState => ({
            items: prevState.items.filter(item => item.name !== name)
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

