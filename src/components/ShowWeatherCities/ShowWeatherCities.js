import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ShowWeather from './../ShowWeather/ShowWeather';



class ShowWeatherCities extends Component {
    render() {
        return (
        <Fragment>
            {
                this.props.cities.reverse().map((item, index) => {
                const { name, country, region } = item.location;
                const { temp_c, temp_f } = item.current;
                return (
                    <ShowWeather 
                        key={index}
                        name={name}
                        country={country}
                        region={region}
                        temp_c={temp_c}
                        temp_f={temp_f}
                        isLocation={true}
                        timestamp={item.timestamp}
                    />
                );
            })
            }
            </Fragment>
        )
    }
}


const mapStateToProps = state => ({
    cities: state.persistedReducer.cities.filter(e => {
        const timestamps = state.persistedReducer.timestamps;
		if (timestamps) {
			return timestamps.every(element => element !== e.timestamp);
		} else {
			return e;
		}
	}),
});

const mapDispatchToProps = dispatch => ({});
 
export default connect(mapStateToProps, mapDispatchToProps)(ShowWeatherCities);
