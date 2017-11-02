let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const repair = new Schema({
    name: String,
    room: String,
    shop: String,
    count: Number,
    value: Number,
    comment: String
},{versionKey: false});

module.exports = mongoose.model('plan', repair);