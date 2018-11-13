
import React, { Component } from "react";
import { connect } from "react-redux";

// Material UI

import Button from "@material-ui/core/Button";

// Actions

import deleteCity from './../../actions/deleteCity';



class ShowWeather extends Component {
  handleClick() {
    this.props.deleteCity(this.props.timestamp);
  }
  render() {
      const { name, country, region } = this.props;
      const { temp_c, temp_f, isLocation } = this.props;
      return (
        <div className="weather__show">
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
          {
            isLocation ? (
            <div className="col">
              <div className="row">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleClick.bind(this)}
                >
                  Delete
                </Button>
              </div>
            </div>    
            ) : ''
          }
        </div>
      );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  deleteCity: (data) => {
    dispatch(deleteCity(data))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowWeather);
