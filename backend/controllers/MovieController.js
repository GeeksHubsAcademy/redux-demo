import MovieModel from '../models/Movie.js';

const MovieController = {
    getAll(req, res) {
        MovieModel.find()
            .then(movies => res.send(movies))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to get the movies'
                })
            })
    },
    getByPage(req, res) {
        const { page } = req.params;
        const skip = (page - 1) * 20
        MovieModel.find()
            .skip(skip).limit(20)
            .then(movies => res.send(movies))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to get the movies'
                })
            })
    },
    getByTitle(req, res) {
        const title = req.params.title;
        const titleRegExp = new RegExp(title, 'i');
        MovieModel.find({ title: titleRegExp })
            .limit(20)
            .then(movies => res.send(movies))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to get the movies'
                })
            })
    },
    insert(req, res) {
        MovieModel.create(req.body)
            .then(movie => res.status(201).send(movie))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to insert the movie'
                })
            })
    },
    update(req, res) {
        const { id } = req.params;
        MovieModel.findByIdAndUpdate(id, req.body, {
                new: true //el new es para que nos devuelva la movie ya actualizada, sino nos devuelve como era antes de actualizar :S
            })
            .then(movie => res.send(movie))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to update the movie'
                })
            })
    },
    delete(req, res) {
        const { id } = req.params;
        MovieModel.findByIdAndDelete(id)
            .then(movie => res.send({ movie, message: 'Successfully deleted' }))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to remove the movie'
                })
            })
    }
}

export default MovieController;