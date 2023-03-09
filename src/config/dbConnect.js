import mongoose from 'mongoose';

mongoose.connect('');

let db = mongoose.connection;

export default db;
