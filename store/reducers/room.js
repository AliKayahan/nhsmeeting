import { FETCH_ROOMS } from '../actions/room';
import ROOMS from '../../data/dummy-data';
//Initial state can be all rooms and filtered rooms
const initialState = {
    availableRooms: ROOMS
}

//We should export reducer to be use from app.js
export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_ROOMS:
            return {
                availableRooms: action.availableRooms,
            }
    }
    return state;
};