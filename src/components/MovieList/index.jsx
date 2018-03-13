    import React from 'react';
    import Movie from '../Movie';

    const List = ({items, ...rest})=> (
        <div className="movieList">
            {items.map(item => (
                <Movie key={item.name} {...item} {...rest} className="movie-card" > </Movie>
            ))}
        </div>
    );
export default List;