
import { GET_CURRENT_WEATHER, GET_WEATHER, NOT_ACCESS, DELETE_WEATHER } from './../constants/actionTypes';

const initialState = {
    cities: [],
    timestamps: []
};

export default (state = initialState, action) => {
    
    if ( action.type === GET_CURRENT_WEATHER ) {
        return {
            ...state,
            currentWeather: action.data
        }
    }
    if (action.type === NOT_ACCESS) {
        return {
            ...state, 
            error: action.error
        }
    }
    if (action.type === DELETE_WEATHER) {
        return {
            ...state,
            timestamps: state.timestamps.concat(action.data)
        }
    }
    if ( action.type === GET_WEATHER ) {
        return {
            ...state,
            cities: state.cities.concat(action.data),
        }
    }

    return state;
}
