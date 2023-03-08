import mongoose, { Schema, version } from "mongoose";

const AuthorSchema = new mongoose.Schema (
    {
        id:{type: String},
        name:{type: String},
        nationality:{type: String},
    },

    {
        versionKey:false
    }
)

const authors = mongoose.model('authors', AuthorSchema);

export default authors;