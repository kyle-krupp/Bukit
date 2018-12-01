import React from 'react'
import logo from "./assets/images/bukitlogo.png";

const Home = props => {
	if (props.user) {
		return (
			<div className="Home center-align">
				<p>Be sure to check into your Dashboard to get the latest news for the cities on your Bukit List!</p>
				{/* <code>
					{JSON.stringify(props)}
				</code> */}
			</div>
		)
	} else {
		return (
			<div className="container">
				<div className="row valign-wrapper">
					<div className="col m6 container">
						<img className="logo" src={logo}></img>
					</div>
					<div className="col m6">
						<div className="card-panel blue">
							<span className="white-text">Want to pin future destinations and keep tabs on the area? Bukit! </span>

							<br />
							<br />

							<span className="white-text">Bukit is an organizer for places you’ve been and places you want to go.
					Taking vacations or traveling can be complicated, there are so many pieces of information you need to keep tabs on for your destination —
What is the weather usually like there? What kind of events occur in the area?</span>

							<br />
							<br />

							<span className="white-text">Instead of navigating, bookmarking multiple sites with static information.
							 Use Bukit to enter where you want to go, and track your destinations over time!
 Add notes for what you want to do while you’re there, and cross them off your Bucket list!</span>

						</div>
					</div>
				</div>
			</div>


		)
	}
}



export default Home
