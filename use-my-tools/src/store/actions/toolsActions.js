import axiosWithAuth from '../../utils/authentication/axiosWithAuth'


export const GET_TOOLS_START = 'GET_TOOLS_START'
export const GET_TOOLS_SUCCESS = 'GET_TOOLS_SUCCESS'
export const GET_TOOLS_FAIL = 'GET_TOOLS_FAIL'

export const ADD_TOOL_START = 'ADD_TOOL_START'
export const ADD_TOOL_SUCCESS = 'ADD_TOOL_SUCCESS'
export const ADD_TOOL_FAIL = 'ADD_TOOL_FAIL'

export const UPDATE_TOOL_START = 'UPDATE_TOOL_START'
export const UPDATE_TOOL_SUCCESS = 'UPDATE_TOOL_SUCCESS'
export const UPDATE_TOOL_FAIL = 'UPDATE_TOOL_FAIL'

export const DELETE_TOOL_START = 'DELETE_TOOL_START'
export const DELETE_TOOL_SUCCESS = 'DELETE_TOOL_SUCCESS'
export const DELETE_TOOL_FAIL = 'DELETE_TOOL_FAIL'

export const  getTools = () => dispatch => {
    dispatch({type: GET_TOOLS_START})
    axiosWithAuth()
    .get('/tools/available')
    .then(res => {
        console.log(res)
        dispatch({type: GET_TOOLS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: GET_TOOLS_FAIL, payload: err})
    })
}

export const addTool = (tool) => dispatch => {
    const newTool = {
            "available": true,
            "rental": false,
            "rentalcost": tool.rentalcost,
            "rentalduration": null,
            "tooldescription": tool.tooldescription,
            "toolimageurl": null,
            "toolname": tool.toolname,
            "tooltype": tool.tooltype,
        }

    
    // dispatch({type: ADD_TOOL_START})
    // console.log('from ADD_TOOL_START action',newTool )
    // axiosWithAuth()
    // .post('/tools/tool/add', newTool)
    // .then(res => {
    //     console.log('from ADD_TOOL_SUCCESS action',res)
        dispatch({type: ADD_TOOL_SUCCESS, payload: tool})
    // })
    // .catch(err => {
    //     console.log(err)
    //     dispatch({type: ADD_TOOL_FAIL, payload: err})
    // })
}

export const updateTool = (updatedTool ,toolid) => dispatch => {
    // dispatch({type: UPDATE_TOOL_START})
    // axiosWithAuth()
    // .get('/tools/tool/add', tool)
    // .then(res => {
    //     console.log(res)
        dispatch({type: UPDATE_TOOL_SUCCESS, payload: updatedTool, toolid: toolid})
    // })
    // .catch(err => {
    //     console.log(err)
    //     dispatch({type: UPDATE_TOOL_FAIL, payload: err})
    // })
}

export const deleteTool = (toolid) => dispatch => {
    console.log(toolid)
    dispatch({type: DELETE_TOOL_SUCCESS, payload: toolid})
    // axiosWithAuth()
    // .get('/tools/tool/delete', toolid)
    // .then(res => {
    //     console.log(res)
    //     dispatch({type: DELETE_TOOL_SUCCESS, payload: tool})
    // })
    // .catch(err => {
    //     console.log(err)
    //     dispatch({type: DELETE_TOOL_FAIL, payload: err})
    // })
}