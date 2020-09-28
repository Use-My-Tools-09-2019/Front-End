
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'




export const loginAC = (credentials) => dispatch => {
    dispatch({ type: LOGIN_SUCCESS, payload: credentials })
}

export const logoutAC = () => dispatch => {
    dispatch({ type: LOGOUT_SUCCESS })
    localStorage.removeItem("token");
    localStorage.removeItem("username");
}