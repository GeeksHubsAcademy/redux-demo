import express from 'express';
import morgan from 'morgan';
import usersRouter from './routes/users.js';
import moviesRouter from './routes/movies.js';
import './config/mongoose.js';
import cors from './middleware/cors.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);

app.listen(PORT, () => console.log('server running on port ' + PORT))