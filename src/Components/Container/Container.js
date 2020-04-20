import React from 'react';
import Forecast from './Forecast/Forecast';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from './Actions/actions';

const Container = (props) => {

    useEffect(() => {
        console.log("[Container] Did Mount !", props);
        if (!props.loading && Object.keys(props.forecast).length === 0) {
            // navigator.geolocation.getCurrentPosition((response) => {
            //     let latitude = response.coords.latitude;
            //     let longitude = response.coords.longitude;
            //     props.onInitWeather(longitude, latitude);
            // }, () => {
                // Default value
                let latitude = 43.7001;
                let longitude = -79.4163;
                props.onInitWeather(longitude, latitude);
                props.onGetWeather("Toronto");
            };
        },


     []);

    return (
        <div className="container">
           <Forecast />
         
        </div>
    );

}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error,
        forecast: state.forecast,
        currentWeather: state.currentWeather
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onInitWeather: (lon, lat) => dispatch(actions.initWeather(lon, lat)),
        onGetWeather: (name) => dispatch(actions.getWeather(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);