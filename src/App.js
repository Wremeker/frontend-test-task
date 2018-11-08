import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

//  React Components

import ShowWeather from './components/ShowWeather/ShowWeather';
import AddCity from './components/AddCity/AddCity';
import ShowWeatherCity from './components/ShowWeatherCity/ShowWeatherCity';

// Actions

import getCurrentWeather from './actions/getCurrentWeather';

// Functions

import getLocation from './getLocation';

// Styles

import './App.css';

const getWeather = (lat, lon ) => {
  let result = new Promise((resolve, reject) => {
    axios.get(`http://api.apixu.com/v1/current.json?key=ca628a294c8a4fc6920162818180811&q=${lat},${lon}`)
    .then(res => {
      resolve(res.data)
    }).catch(e => {
      reject(e)
    });
  })
  return result;
}

class App extends Component {
  componentDidMount() {
    getLocation().then(res => {
      const lat = res.coords.latitude;
      const long = res.coords.longitude;
      const result = getWeather(lat,long);
      result.then(res => {
        this.props.getWeather(res);
      })
    });
  }
  render() {
    return (
      <div className="weather">
        <div className="container">
          <AddCity />
          <ShowWeatherCity />
          <ShowWeather />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => {
  return {
    getWeather: (data) => {
      dispatch(getCurrentWeather(data))
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
