import React, { Component } from 'react';
import { connect } from 'react-redux';



class ShowWeatherCity extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}


const mapStateToProps = state => ({
    cities: state.rootReducer.cities
});
const mapDispatchToProps = dispatch => {
  return {
   
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowWeatherCity);
