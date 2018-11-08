import React, { Component } from "react";
import { connect } from 'react-redux';

// Material UI

import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "./TextFieldStyles";

// Styles

import "./AddCity.css";

// Actions

import getOutherWeather from './../../actions/getOutherWeather';

class AddCity extends Component {
  constructor(props) {
    super(props);
      this.state = {
        addSity: ''
      }
  }
  handleChange(e) {
    const rusRegExp = /[а-яА-ЯёЁ]/g;
    let inputValue = e.target.value;
    if (inputValue.search(rusRegExp) !== -1) {
      e.target.value = inputValue.replace(rusRegExp, "");
    } 
    this.setState({
      addSity: e.target.value
    })
  }
  handleClick(e) {
    if (this.state.addSity.trim()) {
      this.props.addWeather(this.state.addSity)
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="weather__add">
        <h1>Add City</h1>
        <TextField
          id="standard-dense"
          name="add_sity"
          placeholder="Moscow"
          label="Enter the name of the city"
          autoFocus={true}
          className={classes.textField}
          onChange={this.handleChange.bind(this)}
          InputProps={{
            classes: {
              root: classes.input,
              focused: classes.inputFocused
            }
          }}
          InputLabelProps={{
            classes: {
              root: classes.label,
              focused: classes.labelFocused
            }
          }}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleClick.bind(this)}
          classes={{
            root: classes.button
          }}
        >
          Check the weather
        </Button>
      <h1>Weather now</h1>
      </div>
    );
  }
}


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    addWeather: (data) => {
      dispatch(getOutherWeather(data))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddCity));
