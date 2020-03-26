import {USER_AUTH} from '../actions/user';

/**
 * We are setting initial user state here.
 * During development we can set data manually
 * For production revert to visitor.
 */
const initialState = {
    user: {
        name: 'Test User',
        department: 'Test Department',
        eMail: 'test@nhs.gov.uk',
        role: 'staff'
    },
    status: 'authorized',
    time: Date.now()
}
/**
 * We can manage user data from this reducer
 * I used constant to prevent typos
 * @param {*} state 
 * @param {*} action 
 */
const userReducer = (state = initialState, action) => {
    switch(action.type){
        case USER_AUTH: // Define user data action cases here
            return {...state}
        default: 
            return state
    }
}

export default userReducer;