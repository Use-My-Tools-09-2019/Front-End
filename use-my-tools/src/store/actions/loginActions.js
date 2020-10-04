


export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'




export const loginStart = () => dispatch => {
    dispatch({ type: LOGIN_START, })
}

export const loginSuccess = (credentials) => dispatch => {
    dispatch({ type: LOGIN_SUCCESS, payload: credentials })

}

export const loginFail = (err) => dispatch => {
    dispatch({ type: LOGIN_FAIL, payload: err })
}

export const logoutAC = () => dispatch => {
    dispatch({ type: LOGOUT_SUCCESS })
    localStorage.removeItem("token");
    localStorage.removeItem("username");
}