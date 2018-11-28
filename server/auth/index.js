const express = require('express')
const router = express.Router()
const User = require('../db/models/user')
const Location = require('../db/models/Location')
const Note = require('../db/models/Note')
const passport = require('../passport')

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))
router.get(
	'/google/callback',
	passport.authenticate('google', {
		successRedirect: '/',
		failureRedirect: '/login'
	})
)

// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})

router.post(
	'/login',
	function (req, res, next) {
		console.log(req.body)
		console.log('================')
		next()
	},
	passport.authenticate('local'),
	(req, res) => {
		console.log('POST to /login')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser.local) {
			console.log('Deleting ${cleanUser.local.password}')
			delete cleanUser.local.password
		}
		res.json({ user: cleanUser })
	}
)

router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})

router.post('/signup', (req, res) => {
	const { username, password } = req.body
	// ADD VALIDATION
	User.findOne({ 'local.username': username }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with the username: ${username}`
			})
		}
		const newUser = new User({
			'local.username': username,
			'local.password': password
		})
		newUser.save((err, savedUser) => {
			if (err) return res.json(err)
			return res.json(savedUser)
		})
	})
	const { city } = req.body
	const newLocation = new Location({
		'city': city,
		'visited': false,
		'notes': []
	})
	Location.create(newLocation)
		.then(function (dbLocation) {
			return User.findOneAndUpdate({ 'local.username': username }, { $push: { locations: dbLocation._id } }, { new: true });
		})
		.then(function (dbUser) {
			console.log(dbUser);
			res.json(dbUser);
		})
		.catch(function (err) {
			res.json(err);
		});


})

router.post('/', (req, res) => {
	const newNote = new Note({
		'body': 'here is a note'
	})
	Note.create(newNote)
		.then(function (dbNote) {
			return User.findOneAndUpdate({ 'local.username': username }, { $push: { Note: dbNote._id } }, { new: true })
		})
		.then(function (dbUser) {
			console.log(dbUser);
			res.json(dbUser);
		})
		.catch(function (err) {
			res.json(err);
		})

})


module.exports = router
