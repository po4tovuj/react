import React from 'react';
import Movie from '../Movie';
import './styles.css';

const List = ({ items })=> (
    <ul className="movieList">
        {items.map(item => (
            <Movie key={item.id} {...item} />
        ))}
        </ul>
    );
export default List;
