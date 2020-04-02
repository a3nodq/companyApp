var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var memberSchema = new Schema({
    username: { type: String, required: true, ref:"user"},
    email: { type: String, required: true},
    major: "String",
    creatAt: { type: Date, default: Date.now()}
});

module.exports = mongoose.model('member', memberSchema);