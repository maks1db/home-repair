let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const repair = new Schema({
    name: String,
    date: Date,
    count: Number,
    price: Number,
    value: Number,
    disount: Number,
    room: String,
    shop: String,
    comment: String
},{versionKey: false});

module.exports = mongoose.model('repairs', repair);