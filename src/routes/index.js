import express from 'express';
import books from './booksRoutes.js';
import authors from './authorsRouter.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de nodejs"})
    })

    app.use(express.json(), books, authors)
}

export default routes;