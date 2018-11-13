import { DELETE_WEATHER } from './../constants/actionTypes';

export default (data) => {
    return {
        type: DELETE_WEATHER,
        data: data
    }
}