import express from 'express';
import MovieController from '../controllers/MovieController.js';
import { auth, isAdmin } from '../middleware/auth.js'
const router = express.Router();

router.get('/', MovieController.getAll);
router.get('/page/:page', MovieController.getByPage);
router.get('/title/:title', MovieController.getByTitle);
router.post('/', auth, isAdmin, MovieController.insert);
router.put('/:id', auth, isAdmin, MovieController.update);
router.delete('/:id', auth, isAdmin, MovieController.delete);

export default router;