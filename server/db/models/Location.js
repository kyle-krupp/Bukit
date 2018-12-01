const mongoose = require('mongoose')


// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var LocationSchema = new Schema({
  city: String,
  visited: Boolean,
  notes: []
});

// This creates our model from the above schema, using mongoose's model method
var Location = mongoose.model("Location", LocationSchema);

// Export the Note model
module.exports = Location;

