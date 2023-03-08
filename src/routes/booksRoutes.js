import express from 'express';
import booksController from '../controllers/booksControllers.js';

const router = express.Router();

router.get('/books', booksController.listBook);
router.get('/books/search', booksController.listBooksByPublisher);
router.get('/books/:id', booksController.listBookById);
router.post('/books', booksController.registerBook);
router.put('/books/:id', booksController.updateBook);
router.delete('/books/:id', booksController.deleteBook);


export default router;