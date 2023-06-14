const mongoose = require('mongoose');

//Defining schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    number: { type: String, required: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    driverID: { type: String, default: null },
    completed: { type: [String], default: null },
    pending: { type: [String], default: null },
})

//Model
const User = mongoose.model("user", userSchema)

module.exports = User;