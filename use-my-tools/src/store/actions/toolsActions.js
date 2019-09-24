import axiosWithAuth from '../../utils/authentication/axiosWithAuth'


export const GET_TOOLS_START = 'GET_TOOLS_START'
export const GET_TOOLS_SUCCESS = 'GET_TOOLS_SUCCESS'
export const GET_TOOLS_FAIL = 'GET_TOOLS_FAIL'

export const  getTools = () => dispatch => {
    dispatch({type: GET_TOOLS_START})
    axiosWithAuth()
    .get('/tools/tools')
    .then(res => {
        console.log(res)
        dispatch({type: GET_TOOLS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: GET_TOOLS_FAIL, payload: err})
    })
}
