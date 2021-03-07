var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ashwink:ashwink123@cluster0.7gqvd.mongodb.net/test');

var featureSchema = new mongoose.Schema({
    id: { type: Number, index: true, unique: true },
    name: String,
    type: String,
    description: String,
    createdTS: Date,
    version: String,
    owner: String,
    data: String
  });

  mongoose.model('feature', featureSchema);
  
  module.exports = mongoose.model('feature');