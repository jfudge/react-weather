import React, { useState, useEffect } from 'react';
import './Info.css';

const Info = (props) => {
  const  [cities, setCities] = useState([]);

  let [tempSymbol, setTempSymbol] = useState('F');
  useEffect(() => {
    (async function fetchData() {
      const response = await 
      fetch('http://api.openweathermap.org/data/2.5/group?id=6167865,524901&units=metric&appid=40af4c7a896866ecce136a32e66d7f74');
      const data = await response.json();
      setCities(data.list);
    })();
  }, []);
  

  return (
    <div>
    <div className='bottom'>
      <p>Your weather is currently showing in:</p>
      <div className='buttons'>
        <div className='btn'>
          {props.tempSymbol === 'F' ?
            <button className='clicked'>C</button>
            :
            <button onClick={props.setTempSymbol}>C</button>
          }
          <p>Celsius</p>
        </div>
        <div className='btn'>
          {props.tempSymbol === 'C' ?
            <button className='clicked'>F</button>
            :
            <button onClick={props.setTempSymbol}>F</button>
          }
          <p>Fahrenheit</p>
        </div>
      </div>
    </div>
    
  </div>
  );
}

export default Info;