import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Icon } from 'react-materialize'
class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			redirectTo: null
		}
		// this.googleSignin = this.googleSignin.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log('handleSubmit')
		this.props._login(this.state.username, this.state.password)
		this.setState({
			redirectTo: '/'
		})
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="LoginForm container center-align">
					<h3>Login:</h3>
					<p><Icon small>verified_user</Icon></p>
					<form>
						<label htmlFor="username"><p>Username:</p> 
				<p><Icon small>person_outline</Icon></p></label>
						<input
							type="text"
							name="username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
						<label htmlFor="password"><p>Password:</p> 
				<p><Icon small></Icon></p></label>
						<input
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<button onClick={this.handleSubmit}>Login</button>
					</form>
					{/* <a href="/auth/google"> */}
						{/* <GoogleButton /> */}
						{/* <img src={googleButton} alt="sign into Google Button" />
					</a> */}
				</div>
			)
		}
	}
}

export default LoginForm
