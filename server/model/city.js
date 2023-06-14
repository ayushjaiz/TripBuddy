var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CitySchema = new Schema({
    city: {type: String, required: true, index: {unique: true}},
    created_at: {type: Date, default: Date.now()}
});


module.exports = mongoose.model('City', CitySchema);
