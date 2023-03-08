import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema(
    {
        id:{type: String },
        titulo:{type: String, require: true},
        autor: {type: String, require: true},
        editora: {type: String, require: true},
        numeroPaginas: {type: Number, require: false}
    }
);

const books = mongoose.model('books', BookSchema)

export default books;