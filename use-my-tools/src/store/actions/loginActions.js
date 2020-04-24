import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const LOGIN_GET_USER_START = 'LOGIN_GET_USER_START'
export const LOGIN_GET_USER_SUCCESS = 'LOGIN_GET_USER_START'
export const LOGIN_GET_USER_FAIL = 'LOGIN_GET_USER_START'




export const loginAC = (credentials, history) => dispatch => {
    dispatch({ type: LOGIN_START })
    axios
    .post('http://localhost:8888/api/user/login', credentials)
    .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
        console.log(res)
        localStorage.setItem('token', res.data.token);
        localStorage.setItem("username", credentials.user_name);
        history.push(`/marketplace/${ credentials.user_name}`);
        window.location.reload()
    })
    .catch(err => { 
        dispatch({ type: LOGIN_FAILURE, payload: err})
        console.error(err)
    });
    
}
