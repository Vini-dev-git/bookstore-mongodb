import express from 'express';
import AuthorController from '../controllers/authorsController.js';

const router = express.Router();

router.get('/authors', AuthorController.listAuthor);
router.get('/authors/:id', AuthorController.listAuthorBiId);
router.post('/authors', AuthorController.registerAuthor);
router.put('/authors/:id', AuthorController.updateAuthors);
router.delete('/authors/:id', AuthorController.deleteAuthor);

export default router;