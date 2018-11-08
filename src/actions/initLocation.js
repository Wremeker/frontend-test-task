import { INIT_LOCATION } from './../constants/actionTypes';


export default (data) => {
    return {
        type: INIT_LOCATION,
        data: data
    }
}