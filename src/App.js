import React, { Component } from 'react';
import { connect } from 'react-redux';

//  React Components

import AddCity from './components/AddCity/AddCity';


// Actions

import initLocation from './actions/initLocation';

// Functions

import getLocation from './getLocation';

// Styles

import './App.css';



class App extends Component {
  
  componentDidMount() {
    const props = this.props;
    const initLocation = getLocation();
    initLocation.then(res => {
      props.addLocation(res);
    });
  }
  render() {
    return (
      <div className="weather">
        <div className="container">
          <AddCity />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  coordinates: state.rootReducer.data
});

const mapDispatchToProps = dispatch => {
  
  return {
    addLocation: (data) => {
      dispatch(initLocation(data))
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps )(App);
