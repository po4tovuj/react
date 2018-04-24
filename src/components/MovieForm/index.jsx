import React, { Component } from 'react';
import './styles.css';

const initialState = {
    title: '',
    description:'',
    rate:'',
    drama: false,
    action: false,
    comedy: false,

};

export default class MovieForm extends Component {
    state = {
        title: '',
        description:'',
        rate: 1,
        drama: false,
        action: false,
        comedy: false,
    };
    handleOnSubmit = (evt) => {
        evt.preventDefault();
        const {title, description, rate, drama, action, comedy} = this.state;
        const newArr = [];
        drama && newArr.push('drama');
        action && newArr.push('action');
        comedy && newArr.push('comedy');
        if (!title || !description){
            alert('Please fill out form fields!');
        } else {
            this.props.handleMovieAdd(title, description, rate, newArr);
            this.setState(initialState);
        }
    };
    handleInputOnChange = (evt) => {
        const value = evt.target.value;
        const name = evt.target.name;
        console.log(`${name}: ${value}`);
        this.setState({
        [name]: value
        })
    };
    handleGenderToggle= (evt) => {
        const value = evt.target.value;
        this.setState(prevstate => ({
                [value]: !prevstate[value],
            })
        );
    };

    render()
        {
            const { title, description } = this.state;
        return (
            <form action="#" onSubmit={this.handleOnSubmit} className="movie-form" >
                <label className="movie-form__label">
                    Title
                    <input type="text" value={title} name="title" onChange={this.handleInputOnChange} className="movie-form__input" />
                </label>
                <label className="movie-form__label">
                    Description
                    <textarea value={description} className="movie-form__input movie-form__txtarea" onChange={this.handleInputOnChange} name="description" rows="8">
                    </textarea>
                </label>
                <label className="movie-form__label">
                    Rating
                    <select name="rate" value={this.state.rate} onChange={this.handleInputOnChange} className="movie-form__input">
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
                <div className="movie-form__genres" onChange={this.handleGenderToggle}>
                    <label>
                        <input type="checkbox" value="drama" checked={this.state.drama} />
                        drama
                    </label>
                    <label>
                    <input type="checkbox" value="action" checked={this.state.action} />
                    action
                    </label>
                    <label>
                    <input type="checkbox" value="comedy" checked={this.state.comedy} />
                    comedy
                    </label>
                </div>

                <button className="movie-form__submit" type="submit">submit</button>
            </form>
        )
    }
}