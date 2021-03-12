import React, { Component } from 'react';

class Weather extends Component {
    constructor(props) {
        super(props);

        this.onChangeCity = this.onChangeCity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            city: '',
            weatherData: ''
        }
    }

    onChangeCity(e) {
        this.setState({
            city: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const newCity = {
            city: this.state.city,
        };
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${newCity.city}&units=metric&appid=89c5fff8d77e559f2b90717be324b9a9`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Server response wasn\'t OK');
                }
            })
            .then((data) => {
                console.log(data);
                this.setState({ weatherData: data.main })
            })

    }

    render() {
        return (
            <div className="App">
                <h1>Weather</h1>
                <form onSubmit={this.onSubmit} >
                    <input
                        type="text"
                        name="city"
                        placeholder="city"
                        value={this.state.city}
                        onChange={this.onChangeCity}
                    />
                    <button> Submit</button>
                </form>

                <div>

                    Temp : {this.state.weatherData.temp}<br />
                   Feels like : {this.state.weatherData.feels_like}<br />
                   Temp Max : {this.state.weatherData.temp_max}<br />
                   Temp Min : {this.state.weatherData.temp_min}<br />

                </div>
            </div>
        );
    }
}

export default Weather;