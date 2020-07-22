import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './MovieItem.scss';
import { addMovieToCart } from '../../redux/actions/movies';

const MovieItem = ({ movie }) => {

    return <div className="movie">
        <h5>{movie.title}</h5>
        <img src={'http://image.tmdb.org/t/p/w300/' + movie.poster_path} alt={movie.title + ' image'} />
        <ShoppingCartOutlined className="shopping-icon" onClick={() => addMovieToCart(movie)} />

    </div>
}
export default MovieItem