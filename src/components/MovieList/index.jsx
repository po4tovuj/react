import React from 'react';
import Movie from '../Movie';
import './styles.css';

const List = ({ items, ...rest })=> (
    <ul className="movieList">
        {items.map(item => (
            <Movie key={item.id} {...item} {...rest} />
        ))}
        </ul>
    );
export default List;
