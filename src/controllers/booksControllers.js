import books from '../models/Book.js'

class BookController {
    static listBook = (req, res) => {
        books.find((err, books) => {
            if(err){
                res.status(500).json({message:`${err} Fail`})
            }else{
                res.status(200).json(books)
            }
        })
    }

    static listBookById = (req, res) => {
        const id  = req.params.id;
        books.findById(id, (err, books) =>{
            if(err){
                res.status(400).json({message: `${err.message} - id not found`})
            }else{
                res.status(200).json(books)
            }
        })
    }

    static registerBook = (req, res) => {
        let book = new books(req.body)
        book.save((err) => {
            if(err){
                res.status(500).json({message: `${err.message} - Falha ao cadastrar livro`})
            }else {
                res.status(201).send(book.toJSON())
            }
        })
    }

    static updateBook = (req, res) => {
        const { id } = req.params

        books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message:'Successfully updated book'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static deleteBook = (req, res) => {
        const id = req.params.id;

        books.findByIdAndDelete(id, err => {
            if(!err){
                res.status(200).json({message: 'Successfully deleted book'})
            }else{
                res.status(500).json({message: `${err.message}`})
            }
        })
    }

    static listBooksByPublisher = (req, res) => {
        const publisher = req.query.editora;

        books.find({'editora': publisher}, {}, (err, books) => {
            if(!err){
                res.status(200).send(books)
            }else{
                res.status(500).json({message: `${err.message}`})
            }
        })

    }

    
    
}

export default BookController;