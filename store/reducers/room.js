import ROOMS from '../../data/dummy-data';
//Initial state can be all rooms and filtered rooms
const initialState = {
    availableRooms: ROOMS,
    filteredRooms: ROOMS.filter(room => room.type === 'Class')
}
//We should export reducer to be use from app.js
export default (state = initialState, action) => {
    return state;
};