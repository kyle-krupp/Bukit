import React from 'react'
import SignupForm from '../components/SignupForm'
import 'materialize-css/dist/css/materialize.min.css'
import './Comp.css'

const Home = props => {
	if (props.user) {
		return (
			<div className="Home">
				<p>Current User:</p>
				<code>
					{JSON.stringify(props)}
				</code>
			</div>
		)
	} else {
		return (
<div className = "container">		
<div className="row">
    <div className="col s6 offset-s6">
      <div className="card-panel teal">
        <span className="white-text">Want to pin future destinations and keep tabs on the area? Bukit! </span>

		<br/>
		<br/>
		
		<span className="white-text">Bukit is an organizer for places you’ve been and places you want to go. 
Taking vacations or traveling can be complicated, there are so many pieces of information you need to keep tabs on for your destination — 
What is the weather usually like there? What kind of events occur in the area?</span>

<br/>
<br/>

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
