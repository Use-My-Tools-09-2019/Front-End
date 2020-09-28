import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS
} from '../actions'

 
const initalState = { 
    loggedIn: Boolean(localStorage.getItem('token')),
    authToken: null,
    userid: "",
}

export default function loginReducer(state = initalState, action) {
    switch(action.type){
        case LOGIN_SUCCESS: 
            return {
                ...state,
                authToken: action.payload,
                loggedIn: true
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