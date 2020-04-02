var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var resourceSchema = new Schema({
    name: { type: String, required: true, ref:"user"},
    email: { type: String, required: true},
    major: "String",
    phone:{type:Number, required: true},
    city:{type: String, ref:"city"},
    creatAt: { type: Date, default: Date.now()}
});

module.exports = mongoose.model('resource', resourceSchema);