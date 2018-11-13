import React, { Component } from 'react';
import { connect } from 'react-redux';

//  React Components
import ShowWeather from './components/ShowWeather/ShowWeather';
import AddCity from './components/AddCity/AddCity';
import ShowWeatherCities from './components/ShowWeatherCities/ShowWeatherCities';

// Actions

import {getCurrentWeather} from './actions/getCurrentWeather';

// Styles

import './App.css';


class App extends Component {
  componentDidMount() {
    this.props.getWeather()
  }
  render() {
    if (this.props.weather) {
      const { name, country, region } = this.props.weather.location;
      const { temp_c, temp_f } = this.props.weather.current;
      return (
        <div className="weather">
          <div className="container">
            <AddCity />
            <ShowWeatherCities />
            <ShowWeather 
              name={name}
              country={country}
              region={region}
              temp_c={temp_c}
              temp_f={temp_f}
              isCurrent={false}
            />
          </div>
        </div>
      );
    }
    return '';
    
  }
}

const mapStateToProps = state => ({
  weather: state.persistedReducer.currentWeather
});
const mapDispatchToProps = dispatch => {
  return {
    getWeather: () => {
      dispatch(getCurrentWeather())
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
