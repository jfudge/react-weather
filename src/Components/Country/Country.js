import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Country.css';
import Info from './Info/Info';

import Sunny from './WeatherIcons/Sunny';
import SunnyCloud from './WeatherIcons/SunnyCloud';
import Cloudy from './WeatherIcons/Cloudy';
import Snowy from './WeatherIcons/Snowy';  

class Country extends Component {
  getWeekDay() {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = new Date().getDay();
      return days[day];
  }
  getDate() {
      const months = ["January", "February", "March", "April", "May", "June", "Jule", "August", "September", "Octomber", "November", "December"];
      const day = new Date().getDate();
      const month = new Date().getMonth();
      const date = day + " " + months[month];
      return date;
  }

  render() {
      let weatherIcon, temp = parseInt(this.props.temp);
      
      if (temp <= 20 && temp >= 5) {
          weatherIcon = <SunnyCloud />;
      }
      else if (temp <= 5 && temp >= 0) {
          weatherIcon = <Cloudy />;
      }
      else if (temp > 20) {
          weatherIcon = <Sunny />;
      }
      else if (temp < 0) {
          weatherIcon = <Snowy />
      }

      return (
        
        <div className="container">
          <div className="current-data">
              <div className="effect"></div>
              <div className="current-data__content">
                  <div className="current-data__above">
                      <h2>{this.getWeekDay()}</h2>
                      <h3>{this.getDate()}</h3>
                      <p>{this.props.city}</p>
                  </div>
                  <div className="current-data__below">
                      {weatherIcon}
                      <h1>{temp.toFixed(0)}°C</h1>
                  </div>
              </div>
              <Info />
          </div>
        </div>
        
      );
  }
}
const mapStateToProps = state => {
  return {
      city: state.currentWeather.name,
      loading: state.loading,
      temp: state.currentWeather.main ? state.currentWeather.main.temp : undefined

  }
}
export default connect(mapStateToProps)(Country);
