import axios from 'axios';
import '../config/mongoose.js';
import MovieModel from '../models/Movie.js';
const seedMovies = async() => {
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES');

    let {
        total_pages, //para saber el total de páginas
        results
    } = res.data;

    await MovieModel.insertMany(results); //insertamos las 20 primeras movies
    for (let i = 2; i <= total_pages; i++) {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&page=' + i);

        await MovieModel.insertMany(response.data.results);
    }

}
seedMovies()
    .catch(console.error);