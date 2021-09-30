import { GET_TOOLS_START, GET_TOOLS_SUCCESS, GET_TOOLS_FAIL } from "../actions";

const initialState = {
  allTools: [],
  toolsStatus: false,
  activeFilter: {
    all: true,
    Power: false,
    Garden: false,
    Hand: false,
  },
};

export default function marketReducer(state = initialState, action) {
  switch (action.type) {
    //get tools
    case GET_TOOLS_START:
      return {
        ...state,
        toolsStatus: true,
      };
    case GET_TOOLS_SUCCESS:
      return {
        ...state,
        allTools: action.payload,
        activeFilter: action.active,
        toolsStatus: false,
      };
    case GET_TOOLS_FAIL:
      return {
        ...state,
        errMessage: action.payload,
        toolsStatus: false,
      };
    default:
      return state;
  }
}
