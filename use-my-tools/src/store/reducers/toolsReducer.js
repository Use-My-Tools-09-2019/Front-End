
import {
    GET_TOOLS_START,
    GET_TOOLS_SUCCESS,
    GET_TOOLS_FAIL,

    GET_USERTOOLS_START,
    GET_USERTOOLS_SUCCESS,
    GET_USERTOOLS_FAIL,

    ADD_TOOL_START,
    ADD_TOOL_SUCCESS,
    ADD_TOOL_FAIL,

    UPDATE_TOOL_START,
    UPDATE_TOOL_SUCCESS,
    UPDATE_TOOL_FAIL,

    DELETE_TOOL_START,
    DELETE_TOOL_SUCCESS,
    DELETE_TOOL_FAIL,

    SEARCH_TOOLS_START,
    SEARCH_TOOLS_SUCCESS,
    SEARCH_TOOLS_FAIL,

    REQUEST_TOOL_START,
    REQUEST_TOOL_SUCCESS,
    REQUEST_TOOL_FAIL,

} from '../actions'


const initialState = {
    allTools: [],
    activeFilter: {
        all: true,
        Power: false,
        Garden: false,
        Hand: false,
    },
    userTools: [],
    userRentals: [],
    errMessage: null,
    toolsStatus: false,
    userToolsStatus: false,
}

export default function toolsReducer(state = initialState, action) {
    switch (action.type) {
        //get tools
        case GET_TOOLS_START:
            return {
                ...state,
                toolsStatus: true
            }
        case GET_TOOLS_SUCCESS:
            return {
                ...state,
                allTools: action.payload,
                activeFilter: action.active,
                toolsStatus: false
            }
        case GET_TOOLS_FAIL:
            return {
                ...state,
                errMessage: action.payload,
                toolsStatus: false

            }

        //get users tools
        case GET_USERTOOLS_START:
                return {
                    ...state,
                    userToolsStatus: true
        }
        case GET_USERTOOLS_SUCCESS:
            return {
                ...state,
                userTools:  action.payload,
                userToolsStatus: false
            }
        case GET_USERTOOLS_FAIL:
            return {
                ...state,
                errMessage: action.payload,
                userToolsStatus: false
            }

        //add a tool    
        case ADD_TOOL_START:
                return {
                    ...state,
                }
        case ADD_TOOL_SUCCESS:
            return {
                ...state,
                userTools: [...state.userTools, action.payload],
            }
            
        case ADD_TOOL_FAIL:
                return {
                    ...state,
                }

        //update tool        
        case UPDATE_TOOL_START:
            return {
                ...state,
            }

        case UPDATE_TOOL_SUCCESS:
            return {
                ...state,
                userTools: state.userTools.map(tool => {
                        if(tool.id === action.payload.id){
                            return action.payload
                            
                        } 
                        return tool
                        })
            }
        case UPDATE_TOOL_FAIL:
            return {
                ...state,
                errMessage: action.payload
            }
        

        //delete tool
        case DELETE_TOOL_START:
            return {
                ...state,
            }
        case DELETE_TOOL_SUCCESS:
            return {
                ...state,
                userTools:  state.userTools.filter(tool => tool.id !== action.payload)
            }
        case DELETE_TOOL_FAIL:
            return {
                ...state,
                errMessage: action.payload
            }
            
            //requests
            case REQUEST_TOOL_START:
                return {
                    ...state
                }
            case REQUEST_TOOL_SUCCESS:
                return {
                    ...state
                }
            case REQUEST_TOOL_FAIL:
                return {
                    ...state
                }

        default: return state
    }
}