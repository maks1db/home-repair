let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const plan = new Schema({
    name: String,
    room: String,
    shop: String,
    count: Number,
    value: Number,
    comment: String
},{versionKey: false});

module.exports = mongoose.model('plan', plan);