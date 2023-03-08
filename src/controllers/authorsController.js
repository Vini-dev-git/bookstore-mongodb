import authors from '../models/Author.js';

class AuthorController {
    static listAuthor = (req, res) => {
        authors.find((err, authors) => {
            if(err){
                res.status(500).json({message: `${err.message} - Fail`});
            }else{
                res.status(200).json(authors);
            }
        })
    }

    static listAuthorBiId = (req, res) => {
        const { id } = req.params;
        authors.findById(id, (err, authors) => {
            if(err){
                res.status(500).json({message: `${err.message} - Fail`});
            }else{
                res.status(200).json(authors);
            }
        })
    }

    static updateAuthors = (req, res) => {
        const { id } = req.params;

        authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message:'Successfully updated author'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static registerAuthor = (req, res) => {
        let author = new authors(req.body)
        author.save((err) => {
            if(err){
                res.status(500).json({message: `${err.message} - Fail`})
            }else{
                res.status(201).json({message: 'Author successfully created'})
            }
        })
    }

    static deleteAuthor = (req, res) => {
        const id = req.params.id;

        authors.findByIdAndDelete(id, err => {
            if(!err){
                res.status(200).json({message: 'Successfully deleted book'})
            }else{
                res.status(500).json({message: `${err.message}`})
            }
        })
    }
}

export default AuthorController;