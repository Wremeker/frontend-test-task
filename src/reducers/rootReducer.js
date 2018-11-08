
import { GET_CURRENT_WEATHER, GET_WEATHER } from './../constants/actionTypes';

const initialState = {
    cities: []
};

export default (state = initialState, action) => {
    
    if ( action.type === GET_CURRENT_WEATHER ) {
        return {
            ...state,
            currentWeather: action.data
        }
    }

    if ( action.type === GET_WEATHER ) {
        return {
            ...state,
            getCities: state.cities.push(action.data)
        }
    }

    return state;
}
