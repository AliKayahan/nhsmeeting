import {USER_AUTH} from '../actions/user';

const initialState = {
    user: {
        name: 'Test User',
        department: 'Test Department',
        eMail: 'test@nhs.gov.uk'
    }
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case USER_AUTH:
            return {...state}
        default: 
            return state
    }
    return state;
}

export default userReducer;