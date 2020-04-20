import React from 'react';
import './ForecastData.css';
const ForecastData = (props) => {
    const getIcon = () => {
        const { tempAfternoon } = props;
        let icon;
        if (tempAfternoon < 0) {
            icon = (<div>
                <i className="fas fa-snowflake mysnow"></i>
                <i className="fas fa-snowflake mysnow2"></i>
            </div>);
        }
        else if (tempAfternoon >= 0 && tempAfternoon <= 5) {
            icon = <i className="fas fa-cloud mycloud-main"></i>;
        }
        else if (tempAfternoon > 5 && tempAfternoon < 18) {

            icon = (<div style={{ position: 'relative' }}>
                <i className="fas fa-sun mysun"></i>
                <i className="fas fa-cloud mycloud"></i>
            </div>);
        }
        else if (tempAfternoon >= 18) {
            icon = <i className="fas fa-sun mysun"></i>;
        }
        return icon;
    }
    return (
        <div className="forecast-data__container">
            <div className="forecast-data">
                <div className="card">
                    <div>
                        {getIcon()}
                    </div>
                    <div className="weekday-container">{props.day}</div>
                    <div>
                        <div style={{ fontWeight: '300' }}>{props.tempAfternoon}°C</div>
                        <div style={{ color: '#FFF', fontWeight: '300', fontSize: '.9rem' }}>
                            {props.tempNight}°C
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ForecastData;