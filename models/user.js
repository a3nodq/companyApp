const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validPassword = require("passport");


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, required:true },
    password: { type: String, required:true, select: false},
    phone: { type: Number, required:true }
});

UserSchema.method.encryptPassword = async function(password) {
    const salt = await bcrypt.genSalt(5);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

UserSchema.method.validPassword = async function(password){
    const res = await bcrypt.compare(password, this.password);
    return res;
};

module.exports = mongoose.model("user", UserSchema);