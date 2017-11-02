let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const token = new Schema({
    name: String,
    room: String,
    url: String,
    comment: String,
    rating: Number
},{versionKey: false});

module.exports = mongoose.model('idea', token);