import { GET_CURRENT_WEATHER } from './../constants/actionTypes';

export default (data) => {
    return {
        type: GET_CURRENT_WEATHER,
        data: data
    }
}