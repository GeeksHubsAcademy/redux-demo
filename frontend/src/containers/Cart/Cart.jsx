import React from 'react'
import { useSelector } from 'react-redux'
import MovieItem from '../../components/Movie-Item/Movie-Item'
import { addPopcorn } from '../../redux/actions/movies';
const Cart = () => {
    const cart = useSelector(({ movies }) => movies.cart);
    return (
        <div>
            {cart?.map((movie, index) => {
                return <MovieItem movie={movie} />
            })}
            <button type="submit" onClick={addPopcorn}>Palomitas</button>
        </div>
    )
}

export default Cart
