import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS
} from '../actions'

 
const initalState = { 
    loggedIn: Boolean(localStorage.getItem('token')),
    authToken: null,
    userid: "",
    loggingStatus: false,
}

export default function loginReducer(state = initalState, action) {
    switch(action.type){
        case LOGIN_START: 
            return {
                ...state,
                loggingStatus: true
            }

        case LOGIN_SUCCESS: 
            return {
                ...state,
                loggedIn: true,
                loggingStatus: false,
                authToken: action.payload,
            }

        case LOGIN_FAIL: 
        return {
            ...state,
            loggingStatus: false
        }


        case LOGOUT_SUCCESS: 
            return {
                ...state,
                authToken: null,
                loggedIn: false
            }
        default:
            return state
    }
}