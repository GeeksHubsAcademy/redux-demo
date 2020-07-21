//necesaria versión Node 14.3+
import mysql from 'mysql2/promise.js';
import '../config/mongoose.js';
import MovieModel from '../models/Movie.js';
const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'movies'
});
const [movies, fields] = await connection.execute('SELECT * FROM movies');
await MovieModel.insertMany(movies);
console.log('Succesfully database seeded');