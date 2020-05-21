import { combineReducers } from "redux";

import loginReducer from "./loginReducer";
import toolsReducer from "./toolsReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  tools: toolsReducer,
});

export default rootReducer;
