import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://root:root@bookstore.xq2hzsu.mongodb.net/bookStore-node');

let db = mongoose.connection;

export default db;