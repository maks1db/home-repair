let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const idea = new Schema({
    name: String,
    room: String,
    url: String,
    comment: String,
    shop: String,
    price: Number,
    rating: Number
},{versionKey: false});

module.exports = mongoose.model('idea', idea);