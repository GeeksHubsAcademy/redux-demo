import React, { useEffect } from 'react'
import { getByPage } from '../../redux/actions/movies'
import {  useSelector } from 'react-redux';
import './Home.scss';
import MovieItem from '../../components/Movie-Item/Movie-Item';
const Home = (props) => {
    useEffect(() => {
        getByPage()
    }, []);//useEffect con array vacía es lo mismo que el componentDidMount() en clases
    const movies = useSelector(({movies}) => movies.movies );
    console.log(movies)
    return (
        <div className="movies">
            {movies?.map(movie => <MovieItem movie={movie} />)}
        </div>
    )
}
export default Home;