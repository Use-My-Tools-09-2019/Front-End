

import {
    GET_TOOLS_START,
    GET_TOOLS_SUCCESS,
    GET_TOOLS_FAIL,

    ADD_TOOL_START,
    ADD_TOOL_SUCCESS,
    ADD_TOOL_FAIL,

    UPDATE_TOOL_START,
    UPDATE_TOOL_SUCCESS,
    UPDATE_TOOL_FAIL,

    DELETE_TOOL_START,
    DELETE_TOOL_SUCCESS,
    DELETE_TOOL_FAIL,
} from '../actions'


const initialState = {
    allTools: [
        {
            "name": "Angle-grinder",
            "picture": "http://placehold.it/32x32",
            "about": "Hand-held angle-grinder powered by electric motor",
            "price": "$7/day"
        },
        {
            "name": "Jackhammer",
            "picture": "http://placehold.it/32x32",
            "about": "Hand-held jackhammer powered by electric motor",
            "price": "$18/day"
        },
        {
            "name": "Power-wrench",
            "picture": "http://placehold.it/32x32",
            "about": "Hand-held power-wrench that uses compressed air",
            "price": "$8/day"
        },
        {
            "name": "Chainsaw",
            "picture": "http://placehold.it/32x32",
            "about": "Electric motor powered chainsaw",
            "price": "$15/day"
        },
        {
            "name": "Angle-grinder",
            "picture": "http://placehold.it/32x32",
            "about": "Hand-held angle-grinder powered by electric motor",
            "price": "$7/day"
        },
    ],
    userTools: [{
                rentalcost: 2,
                tooldescription: "awesome",
                toolid: 0,
                toolname: "hammer",
                tooltype: "hand"},
            ],
    userRentals: [],
    errMessage: null,
    status: false
}

export default function toolsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TOOLS_START:
            return {
                ...state,
                status: true
            }
        case GET_TOOLS_SUCCESS:
            return {
                ...state,
                allTools: action.payload
            }
        case GET_TOOLS_FAIL:
            return {
                ...state,
                errMessage: action.payload
            }

            
        case ADD_TOOL_START:
                return {
                    ...state,
                    userTools: [...state.userTools, action.payload]
                    // status: true
                }
        case ADD_TOOL_SUCCESS:
            return {
                ...state,
                status: false
            }
            
        case ADD_TOOL_FAIL:
                return {
                    ...state,
                    status: true
                }

        case UPDATE_TOOL_START:
            return {
                ...state,
                status: true
            }

        case UPDATE_TOOL_SUCCESS:
            return {
                ...state,
                allTools: action.payload
            }
        case UPDATE_TOOL_FAIL:
            return {
                ...state,
                errMessage: action.payload
            }

        case DELETE_TOOL_START:
            return {
                ...state,
                status: true
            }
        case DELETE_TOOL_SUCCESS:
            return {
                ...state,
                userTools:  state.userTools.filter(tool => tool.toolid !== action.payload)
            }
        case DELETE_TOOL_FAIL:
            return {
                ...state,
                errMessage: action.payload
            }

        default: return state
    }
}