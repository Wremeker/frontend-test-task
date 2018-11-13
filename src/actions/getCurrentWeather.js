import { GET_CURRENT_WEATHER, NOT_ACCESS } from './../constants/actionTypes';
import axios  from 'axios';

const getLocation = () => {
    const getlocation = navigator.geolocation;
    const location = new Promise((resolve, reject) => {
        if (!getlocation) {
            reject(new Error('Not Access'));
        }
        getlocation.getCurrentPosition(position => {
            resolve(position);
        }, () => {
            reject(new Error('Not Access'));
        });
    });
    return location;
}

export const getCurrentWeather = () => dispatch => {
    const getCurrentLocation = getLocation();
    if (!getCurrentLocation) {
        dispatch({
            type: NOT_ACCESS,
            data: null,
            error: true,
        })
    } else {
        getCurrentLocation.then(res => {
            const lat = res.coords.latitude;
            const long = res.coords.longitude;
            axios.get(`http://api.apixu.com/v1/current.json?key=ca628a294c8a4fc6920162818180811&q=${lat},${long}`)
                .then(res => {
                    dispatch({
                        type: GET_CURRENT_WEATHER,
                        data: res.data,
                        error: true,
                    });
                });
        });
    }
}

export default getCurrentWeather;