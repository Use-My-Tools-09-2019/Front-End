import axios from 'axios'
import axiosWithAuth from '../../utils/authentication/axiosWithAuth'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const LOGIN_GET_USER_START = 'LOGIN_GET_USER_START'
export const LOGIN_GET_USER_SUCCESS = 'LOGIN_GET_USER_START'
export const LOGIN_GET_USER_FAIL = 'LOGIN_GET_USER_START'




export const loginAC = (credentials, history) => dispatch => {
    dispatch({ type: LOGIN_START })

    axios
    .post('https://jcrn-use-my-tools.herokuapp.com/login', `grant_type=password&username=${credentials.username}&password=${credentials.password}`, {

        headers: {
            Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
        console.log(res)
        localStorage.setItem('token', res.data.access_token);
        localStorage.setItem("username", credentials.username);
        history.push(`/dashboard/${ credentials.username}`);

    })
    .catch(err => { 
        dispatch({ type: LOGIN_FAILURE, payload: err})
        console.error(err)
    });
    
    // dispatch({ type: LOGIN_GET_USER_START})
    // axiosWithAuth()
    //     .get(`users/getusername`)
    //     .then(res => {
    //         dispatch({ type: LOGIN_GET_USER_SUCCESS, payload: res.data})
    //         console.log('from LOGIN_GET_USER', res)
    //         localStorage.setItem("userid", res.data.userid);
    //     })
    //     .catch(err => {
    //         dispatch({ type: LOGIN_GET_USER_FAIL, payload: err})
    //         console.log('from LOGIN_GET_USER', err)
    //     })
}
