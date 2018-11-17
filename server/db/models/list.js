const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

const listSchema = new Schema({

lists: [

    {
        cityName: { type: String, unique: false, required: false, default: 'New York City' },
        visited: { type: Boolean, unique: false, required: false, default: false},
        notes: [

            {
                note: { type: String, unique: false, required: false, default: 'Here are some notes' }
            }

        ]
    }
]
})

const List = mongoose.model('List', listSchema)
module.exports = List