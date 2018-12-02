import React from "react";
import "./Weather.css";


class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            icon: "",
            temperature: "",
            description: ""
        };
    }

     componentDidMount() {
         fetch("https://api.apixu.com/v1/current.json?key=c8970619fa04431fad5233603180112&q=New York")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        icon: result.current.condition.icon,
                        temperature: result.current.temp_f,
                       description: result.current.condition.text
                    });
                    // console.log(conditions);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                     
                        <ul>
                            <li>
                                   
                
                            </li>
                            <li>

                                <img className="weatherImage" src={this.state.icon} width="100" height="75" alt="weather-icon"></img>
                                {/* <img className="weatherImage" src={'http://openweathermap.org/img/w/'+this.state.items[0].icon +'.png'} width="100" height="75" alt="weather-icon"></img> */}
                                
                            </li>
                            
                            <li>Temperature: {this.state.temperature}&deg;F</li>
                                <li>  Description: {this.state.description}</li>
                        
                        </ul>
                   

            
                    
                    
                </div>
            )
        }
    }
}

export default Weather;