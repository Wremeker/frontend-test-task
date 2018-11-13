import axios from 'axios';
import { GET_WEATHER } from './../constants/actionTypes';

export const getOutherWeather = (data) => dispatch => {
    
    axios.get(`http://api.apixu.com/v1/current.json?key=ca628a294c8a4fc6920162818180811&q=${data.city}`)
    .then(res => {
        dispatch({
            type: GET_WEATHER,
            data: {
                ...res.data,
                timestamp: data.timestamp
            }
        })
    });
    
}

export default getOutherWeather;