import React from 'react';
import './WeatherIcons.css';

const Thunder = () => {
    return (
        <div className="icon thunder-storm">
            <div className="cloud"></div>
            <div className="lightning">
                <div className="bolt"></div>
                <div className="bolt"></div>
            </div>
        </div>
    );
}

export default Thunder;