/**
 * This state holds uptodate access token 
 * for back-end interactions.
 */

import { REFRESH_TOKEN } from "../actions/zoho";

const initialState = {
    accessToken: "",
    lastUpdate: Date.now()
}

const backEndReducer = (state = initialState, action) => {
    switch(action.type){
        case REFRESH_TOKEN: 
            return {...state}
        default:
            return state;
    }
}

export default backEndReducer;
