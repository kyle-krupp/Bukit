import React from 'react'
// TODO - add proptypes

const Header = props => {
	let Greeting
	if (props.user === null) {
		Greeting = <h5>Welcome to <b><i>Bukit!</i></b></h5>
	} else if (props.user.local.username) {
		Greeting = (
			<h5>
				Welcome back, <strong>{props.user.local.username} </strong>
			</h5>
		)
	}
	return (
		<div className="Header">
			{Greeting}
		</div>
	)
}

export default Header