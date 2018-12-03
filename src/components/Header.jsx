import React from 'react'
// TODO - add proptypes

const Header = props => {
	let Greeting
	if (props.user === null) {
		Greeting = <h4>Welcome to <b><i>Bukit List!</i></b></h4>
	} else if (props.user.local.username) {
		Greeting = (
			<h4>
				Welcome back, <strong>{props.user.local.username} </strong>
			</h4>
		)
	}
	return (
		<div className="Header">
			{Greeting}
		</div>
	)
}

export default Header