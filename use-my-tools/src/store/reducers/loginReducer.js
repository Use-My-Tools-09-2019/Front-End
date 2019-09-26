import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions'

 
const initalState = { 
    fetching: false,
    authToken: null,
}

export default function loginReducer(state = initalState, action) {
    switch(action.type){
        case LOGIN_START: 
            return {
                ...state,
                fetching: true
            }

        case LOGIN_SUCCESS: 
            return {
                ...state,
                fetching: false,
                authToken: action.payload
            }

        case LOGIN_FAILURE: 
            return {
                ...state,
                fetching: false
            }
        
        default:
            return state
    }
}