import React from 'react';
import './App.css';

// API
import { fetchData, fectchDailyData } from './api';

// components
import { Cards } from './components/Cards';
import { Charts } from './components/Charts';
import { StatePicker } from './components/StatePicker';

class App extends React.Component{
  state = {
    data:{},
    dailyData:[],
    stateName:'',
  }

  
  async componentDidMount(){
    const fetchedData = await fetchData('TT');
    const fetchedDailyData = await fectchDailyData('TT');
    this.setState({data:fetchedData, dailyData:fetchedDailyData});
  }

  handleStateChange = async (stateName) => {
    const fetchedData = await fetchData(stateName);
    const fetchedDailyData = await fectchDailyData(stateName);
    this.setState({data: fetchedData, dailyData: fetchedDailyData, stateName: stateName});
  }

  render(){
    return (
      <div className="App">
        <h1>Covid-19 Tracker</h1>
        <Cards data={this.state.data}/>
        <StatePicker handleStateChange={this.handleStateChange} />
        <Charts dailyData={this.state.dailyData}/>
        <p id="credits">Data is being fetched from <a href='https://covid19tracker.in/'>COVID19TRACKER.IN</a></p>
      </div>
    );
  }
  
}

export default App;
