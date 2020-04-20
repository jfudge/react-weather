import React, { Component } from 'react';
import './Forecast.css';
import { connect } from 'react-redux';
import ForecastData from './ForecastData/ForecastData';

class Forecast extends Component {
    state = {}
    convertToTime(timestamp) {
        let date = new Date(timestamp * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        minutes = minutes.length > 2 ? minutes.substring(1, 3) : minutes;
        let time = hours + " : " + minutes;
        return time;

    }
    render() {

        const { humidity, pressure, sunrise, sunset, list } = this.props;
        let windSpeed = this.props.windSpeed;
        const temperatures = [];
        if (list) {
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let day = new Date().getDay();
            for (let i = 10; i <= 26; i += 4) {
                if (day === 6) {
                    day = 0;
                }
                else {
                    day++;
                }
                temperatures.push({ tempAfternoon: list[i].main.temp, tempNight: list[i + 4].main.temp, weekDay: days[day] });
            }
        }
        windSpeed = parseInt(windSpeed);
        return (
            <div className="forecast">
                <div className="forecast-content">
                    <div className="extra-current-data">
                        <div><i className="fas fa-wind wind"></i> Wind speed <span>{windSpeed.toFixed(0)} m/s</span></div>
                        <div><i className="fas fa-tint humidity"></i> Humidity <span>{humidity}%</span></div>
                        <div><i className="fas fa-compress-arrows-alt press"></i> Pressure <span>{pressure}</span></div>
                        <div><i className="fas fa-sun sun-i"></i> Sunrise <span>{this.convertToTime(sunrise)}</span></div>
                        <div><i className="fas fa-moon sunset"></i> Sunset <span>{this.convertToTime(sunset)}</span></div>
                    </div>
                    <div className="forecast-data">
                        {temperatures.map(temperature => (
                            <ForecastData
                                key={temperature.weekDay}
                                tempAfternoon={parseInt(temperature.tempAfternoon).toFixed(0)}
                                tempNight={parseInt(temperature.tempNight).toFixed(0)}
                                day={temperature.weekDay} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        windSpeed: state.currentWeather.wind ? state.currentWeather.wind.speed : undefined,
        humidity: state.currentWeather.main ? state.currentWeather.main.humidity : undefined,
        pressure: state.currentWeather.main ? state.currentWeather.main.pressure : undefined,
        sunrise: state.currentWeather.sys ? state.currentWeather.sys.sunrise : undefined,
        sunset: state.currentWeather.sys ? state.currentWeather.sys.sunset : undefined,
        list: state.forecast.list
    }
}

export default connect(mapStateToProps)(Forecast);