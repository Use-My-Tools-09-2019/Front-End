// import axoisWithAuth from '../../utils/authentication/axiosWithAuth'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'


export const loginAC = (credentials, history) => dispatch => {
    // dispatch({ type: LOGIN_START })
    // axoisWithAuth()
    // .post('/login', credentials)
    // .then(res => {
    //     dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
    //     localStorage.setItem('token', res.data.payload);
    //     history.push('/friendsList');
    // })
    // .catch(err => { 
    //     dispatch({ type: LOGIN_FAILURE, payload: err})
    //     console.error(err)
    // });
}