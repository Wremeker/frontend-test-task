
import { INIT_LOCATION } from './../constants/actionTypes';

const initialState = {};
    


export default (state = initialState, action) => {

    if (action.type === INIT_LOCATION) {
        return {
            ...state,
            location: {
                latitude: action.data.coords.latitude,
                longitude: action.data.coords.latitude,
            }
        }
    }

    return state;
}
