import React, { Component } from "react";
import { connect } from "react-redux";

class ShowWeather extends Component {
  render() {
    if (this.props.weather) {
      const { name, country, region } = this.props.weather.location;
      const { temp_c, temp_f, } = this.props.weather.current;
      return (
        <div className="weather__current-show">
          <div className="col">
            <h3>Location</h3>
            <div className="row">
              <span className="city__info">Country: {country}</span>
            </div>
            <div className="row">
              <span className="city__info">Sity: {name}</span>
            </div>
            <div className="row">
              <span className="city__info">Region: {region}</span>
            </div>
          </div>
          <div className="col">
            <h3>Temperature C</h3>
            <div className="row">
              <span className="temp__info">{temp_c}</span>
            </div>
          </div>
          <div className="col">
            <h3>Temperature F</h3>
            <div className="row">
              <span className="temp__info">{temp_f}</span>
            </div>
          </div>
        </div>
      );
    }
    return "";
  }
}

const mapStateToProps = state => ({
  weather: state.rootReducer.currentWeather
});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowWeather);
