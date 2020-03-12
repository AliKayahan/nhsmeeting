import ROOMS from '../../data/dummy-data';

const initialState = {
    availableRooms: ROOMS,
    filteredRooms: ROOMS.filter(room => room.type === 'Class')
}

export default (state = initialState, action) => {
    return state;
};