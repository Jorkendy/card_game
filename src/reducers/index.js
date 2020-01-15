import { combineReducers } from "redux";

import App from "./App.reducer";
import Timer from "./Timer.reducer";

const rootReducer = combineReducers({ App, Timer });

export default rootReducer;
