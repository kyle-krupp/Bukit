import React from "react";
import "./Weather.css";


class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            temperature: ""
        };
    }

    componentDidMount() {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + "New York" + ",us&appid=70439c79cebf51416398a33b121030b1&units=imperial")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        items: result.weather,
                        temperature: result.main.temp
                       
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
                                <img className="weatherImage" src={'http://openweathermap.org/img/w/'+this.state.items[0].icon +'.png'} width="100" height="75" alt="weather-icon"></img>
                                
                            </li>
                            
                            <li>Temperature: {this.state.temperature}&deg;F</li>
                                <li>  Description: {this.state.items[0].description}</li>
                        
                        </ul>
                   

            
                    
                    
                </div>
            )
        }
    }
}

export default Weather;