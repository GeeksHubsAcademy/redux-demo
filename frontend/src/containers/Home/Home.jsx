import React from 'react'
import { getByPage } from '../../redux/actions/movies'
import { connect } from 'react-redux';
import './Home.scss';
import MovieItem from '../../components/Movie-Item/Movie-Item';
class Home extends React.Component {
    componentDidMount() {
        getByPage()
    }
    render() {
        return (
            <div className="movies">
                {this.props.movies?.map(movie =><MovieItem
                 key={movie._id} movie={movie} />)}
            </div>
        )
    }
}
const mapStateToProps = ({movies}) => ({ movies: movies.movies });
export default connect(mapStateToProps)(Home);