import axiosWithAuth from '../../utils/authentication/axiosWithAuth'


export const GET_TOOLS_START = 'GET_TOOLS_START'
export const GET_TOOLS_SUCCESS = 'GET_TOOLS_SUCCESS'
export const GET_TOOLS_FAIL = 'GET_TOOLS_FAIL'

export const GET_USERTOOLS_START = 'GET_USERTOOLS_START'
export const GET_USERTOOLS_SUCCESS = 'GET_USERTOOLS_SUCCESS'
export const GET_USERTOOLS_FAIL = 'GET_USERTOOLS_FAIL'

export const ADD_TOOL_START = 'ADD_TOOL_START'
export const ADD_TOOL_SUCCESS = 'ADD_TOOL_SUCCESS'
export const ADD_TOOL_FAIL = 'ADD_TOOL_FAIL'

export const UPDATE_TOOL_START = 'UPDATE_TOOL_START'
export const UPDATE_TOOL_SUCCESS = 'UPDATE_TOOL_SUCCESS'
export const UPDATE_TOOL_FAIL = 'UPDATE_TOOL_FAIL'

export const DELETE_TOOL_START = 'DELETE_TOOL_START'
export const DELETE_TOOL_SUCCESS = 'DELETE_TOOL_SUCCESS'
export const DELETE_TOOL_FAIL = 'DELETE_TOOL_FAIL'

export const SEARCH_TOOLS_START = 'SEARCH_TOOLS_START'
export const SEARCH_TOOLS_SUCCESS = 'SEARCH_TOOLS_SUCCESS'
export const SEARCH_TOOLS_FAIL = 'SEARCH_TOOLS_FAIL'

export const REQUEST_TOOL_START = 'REQUEST_TOOL_START'
export const REQUEST_TOOL_SUCCESS = 'REQUEST_TOOL_SUCCESS'
export const REQUEST_TOOL_FAIL = 'REQUEST_TOOL_FAIL'

export const  getTools = () => dispatch => {
    dispatch({type: GET_TOOLS_START})
    axiosWithAuth()
    .get('/tools/rentals')
    .then(res => {
        console.log(res)
        dispatch({type: GET_TOOLS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: GET_TOOLS_FAIL, payload: err})
    })
}

export const  getUserTools = () => dispatch => {
    dispatch({type: GET_USERTOOLS_START})
    axiosWithAuth()
    .get('/tools/rentals')
    .then(res => {
        console.log(res)
        dispatch({type: GET_USERTOOLS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: GET_USERTOOLS_FAIL, payload: err})
    })
}

export const addTool = (tool) => dispatch => {
    const newTool = {
            "available": true,
            "rental": true,
            "rentalcost": tool.rentalcost,
            "rentalduration": null,
            "tooldescription": tool.tooldescription,
            "toolimageurl": null,
            "toolname": tool.toolname,
            "tooltype": tool.tooltype,
        }

    console.log(newTool)

    dispatch({type: ADD_TOOL_START})
    console.log('from ADD_TOOL_START action',newTool )
    axiosWithAuth()
    .post('/tools/tool/add', newTool)
    .then(res => {
        console.log('from ADD_TOOL_SUCCESS action',res)
        dispatch({type: ADD_TOOL_SUCCESS, payload: tool})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: ADD_TOOL_FAIL, payload: err})
    })
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

    axiosWithAuth()
    .get('/tools/tool/delete', toolid)
    .then(res => {
        console.log(res)
        dispatch({type: DELETE_TOOL_SUCCESS, payload: toolid})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: DELETE_TOOL_FAIL, payload: err})
    })
}

export const  searchTools = (searchParam) => dispatch => {
    dispatch({type: SEARCH_TOOLS_START})
    console.log(searchParam.searchParam)
    axiosWithAuth()
    .get(`/tools/typelike/${searchParam.searchParam}`)
    .then(res => {
        console.log('From searchTools action',res)
        dispatch({type: SEARCH_TOOLS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log('From searchTools action',err)
        dispatch({type: SEARCH_TOOLS_FAIL, payload: err})
    })
}
// rentalid, rentaldate, toolid, userid
export const  requestTool = (requestedTool) => dispatch => {
    const rentalRequest = {
        "rentaldate": requestedTool.rentaldate,
        "toolid": requestedTool.toolid,
    }
    dispatch({type: REQUEST_TOOL_START})
    console.log(rentalRequest)

    // axiosWithAuth()
    // .post(`/rentals/rental/add`, rentalRequest)
    // .then(res => {
    //     console.log('From searchTools action',res)
    //     dispatch({type: REQUEST_TOOL_SUCCESS, payload: res.data})
    // })
    // .catch(err => {
    //     console.log('From searchTools action',err)
    //     dispatch({type: REQUEST_TOOL_FAIL, payload: err})
    // })
}