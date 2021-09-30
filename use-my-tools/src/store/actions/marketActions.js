import axiosWithAuth from "../../utils/authentication/axiosWithAuth";

export const GET_TOOLS_START = "GET_TOOLS_START";
export const GET_TOOLS_SUCCESS = "GET_TOOLS_SUCCESS";
export const GET_TOOLS_FAIL = "GET_TOOLS_FAIL";

export const getTools = (filter = "all") => (dispatch) => {
  //setup initial state for filter buttons
  let initialActive = {
    all: false,
    "Power Tool": false,
    "Garden Tool": false,
    "Hand Tool": false,
  };
  //set whatever the filter is to be true
  initialActive[filter] = true;

  dispatch({ type: GET_TOOLS_START });
  axiosWithAuth()
    .get("/api/tools")
    .then((res) => {
      if (filter === "all") {
        dispatch({
          type: GET_TOOLS_SUCCESS,
          payload: res.data,
          active: initialActive,
        });
      } else {
        const filteredArray = res.data.filter((tool) => {
          return tool.tool_type === filter;
        });
        dispatch({
          type: GET_TOOLS_SUCCESS,
          payload: filteredArray,
          active: initialActive,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_TOOLS_FAIL, payload: err });
    });
};
