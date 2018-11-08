/* Mongo Database
* - this is where we set up our connection to the mongo database
*/
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
let MONGO_URL
const MONGO_LOCAL_URL = 'mongodb://localhost/mern-passport'

if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI)
	MONGO_URL = 'mongodb://heroku_mtln19hq:heroku_mtln19hq"@ds155213.mlab.com:55213/heroku_mtln19hq'
} else {
	mongoose.connect('mongodb://root:root@localhost/admin?authSource=admin') // local mongo url
	MONGO_URL = MONGO_LOCAL_URL
}

// should mongoose.connection be put in the call back of mongoose.connect???
const db = mongoose.connection
db.on('error', err => {
	console.log(`There was an error connecting to the database: ${err}`)
})
db.once('open', () => {
	console.log(
		`You have successfully connected to your mongo database: ${MONGO_URL}`
	)
})

module.exports = db
