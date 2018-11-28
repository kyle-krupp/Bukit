const mongoose = require('mongoose')


// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

const NoteSchema = new Schema ({
    body: String
})

// This creates our model from the above schema, using mongoose's model method
var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;