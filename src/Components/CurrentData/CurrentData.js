import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sunny from '../Container/Forecast/WeatherIcons/Sunny';
import SunnyCloud from '../Container/Forecast/WeatherIcons/SunnyCloud';
import Cloudy from '../Container/Forecast/WeatherIcons/Cloudy';
import Snowy from '../Container/Forecast/WeatherIcons/Snowy';  

const weatherIcon = (props) => {
    let weatherIcon, currentTemp = parseInt(this.props.cities.currentTemp);

 if (currentTemp <= 20 && currentTemp >= 5) {
    weatherIcon = <SunnyCloud />;
}
else if (currentTemp <= 5 && currentTemp >= 0) {
    weatherIcon = <Cloudy />;
}
else if (currentTemp > 20) {
    weatherIcon = <Sunny />;
}
else if (currentTemp < 0) {
    weatherIcon = <Snowy />
}

  return (
    
      <div>
        {weatherIcon}
      </div>
   
  );
}

export default weatherIcon;

