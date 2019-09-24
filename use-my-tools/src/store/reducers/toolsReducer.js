

import {
    GET_TOOLS_START,
    GET_TOOLS_SUCCESS,
    GET_TOOLS_FAIL, 
    getTools
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
            }
    ], 
    userTools: [],
    userRentals: [],
    errMessage: null,
    status: false
}

export default function toolsReducer(state = initialState, action)  {
    switch(action.type){
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
        

        default: return state
    }
}