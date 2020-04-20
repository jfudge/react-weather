import React from 'react';

const weatherURL = "http://api.openweathermap.org/data/2.5/group?id=6167865,524901&units=metric&appid=40af4c7a896866ecce136a32e66d7f74" 

class Weekcontainer extends React.Component {
  state = {
    days: []
  }

  componentDidMount = () => {
    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      console.log("Data List Loaded", data.list)
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      this.setState({days: dailyData})
    })
  }

//   formatCards = () => {
//     return this.state.days.map((day, index) => <Card day={day} key={index}/>)
//   }

//   render() {
//     return (
//       <div className="container">
//       <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
//       <h5 className="display-5 text-muted">New York, US</h5>
//         <div className="row justify-content-center">

//           {this.formatCards()}

//         </div>
//       </div>
//     )
//   }
}

    
    export default Weekcontainer;