let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const cost = new Schema({
    name: String,
    date: Date,
    value: Number
},{versionKey: false});

module.exports = mongoose.model('costs', cost);