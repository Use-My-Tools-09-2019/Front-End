import { combineReducers } from "redux";

import loginReducer from "./loginReducer";
import myToolsReducer from "./myToolsReducer";
import marketReducer from "./marketReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  myTools: myToolsReducer,
  market: marketReducer,
});

export default rootReducer;
