import {
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
  REQUEST_TOOL_START,
  REQUEST_TOOL_SUCCESS,
  REQUEST_TOOL_FAIL,
  GET_REQUESTS_START,
  GET_REQUESTS_SUCCESS,
  GET_REQUESTS_FAIL,
  DELETE_REQUEST_START,
  DELETE_REQUEST_SUCCESS,
  DELETE_REQUEST_FAIL,
  UPLOAD_IMAGE_START,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAIL,
  DELETE_IMAGE_START,
  DELETE_IMAGE_SUCCESS,
  DELETE_IMAGE_FAIL,
} from "../actions";

const initialState = {
  userTools: [],
  requests: [],
  errMessage: null,
  requestsStatus: false,
  userToolsStatus: false,
  imageStatus: false,
};

export default function myToolsReducer(state = initialState, action) {
  switch (action.type) {
    //get users tools
    case GET_USERTOOLS_START:
      return {
        ...state,
        userToolsStatus: true,
      };
    case GET_USERTOOLS_SUCCESS:
      return {
        ...state,
        userTools: action.payload,
        userToolsStatus: false,
      };
    case GET_USERTOOLS_FAIL:
      return {
        ...state,
        errMessage: action.payload,
        userToolsStatus: false,
      };

    //add a tool
    case ADD_TOOL_START:
      return {
        ...state,
      };
    case ADD_TOOL_SUCCESS:
      return {
        ...state,
        userTools: [...state.userTools, action.payload],
      };

    case ADD_TOOL_FAIL:
      return {
        ...state,
      };

    //update tool
    case UPDATE_TOOL_START:
      return {
        ...state,
      };

    case UPDATE_TOOL_SUCCESS:
      return {
        ...state,
        userTools: state.userTools.map((tool) => {
          if (tool.id === action.payload.id) {
            return action.payload;
          }
          return tool;
        }),
      };
    case UPDATE_TOOL_FAIL:
      return {
        ...state,
        errMessage: action.payload,
      };

    //delete tool
    case DELETE_TOOL_START:
      return {
        ...state,
      };
    case DELETE_TOOL_SUCCESS:
      return {
        ...state,
        userTools: state.userTools.filter((tool) => tool.id !== action.payload),
      };
    case DELETE_TOOL_FAIL:
      return {
        ...state,
        errMessage: action.payload,
      };

    //requests
    case REQUEST_TOOL_START:
      return {
        ...state,
      };
    case REQUEST_TOOL_SUCCESS:
      return {
        ...state,
      };
    case REQUEST_TOOL_FAIL:
      return {
        ...state,
      };

    case GET_REQUESTS_START:
      return {
        ...state,
        requestsStatus: true,
      };
    case GET_REQUESTS_SUCCESS:
      return {
        ...state,
        requests: action.payload,
        requestsStatus: false,
      };
    case GET_REQUESTS_FAIL:
      return {
        ...state,
        errMessage: action.payload,
        requestsStatus: false,
      };

    case DELETE_REQUEST_START:
      return {
        ...state,
        requestsStatus: true,
      };
    case DELETE_REQUEST_SUCCESS:
      return {
        ...state,
        requests: state.userTools.filter((tool) => tool.id !== action.payload),
        requestsStatus: false,
      };
    case DELETE_REQUEST_FAIL:
      return {
        ...state,
        errMessage: action.payload,
        requestsStatus: false,
      };

    //upload image
    case UPLOAD_IMAGE_START:
      return {
        ...state,
        imageStatus: true,
      };
    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        imageStatus: false,
        userTools: state.userTools.map((tool) => {
          if (tool.id === action.payload.id) {
            return action.payload;
          }
          return tool;
        }),
      };
    case UPLOAD_IMAGE_FAIL:
      return {
        ...state,
        imageStatus: false,
        errMessage: action.payload,
      };

    //delete image

    case DELETE_IMAGE_START:
      return {
        ...state,
        imageStatus: true,
      };
    case DELETE_IMAGE_SUCCESS:
      return {
        ...state,
        imageStatus: false,
        userTools: state.userTools.map((tool) => {
          if (tool.id === action.payload.id) {
            return action.payload;
          }
          return tool;
        }),
      };
    case DELETE_IMAGE_FAIL:
      return {
        ...state,
        imageStatus: false,
        errMessage: action.payload,
      };

    default:
      return state;
  }
}
