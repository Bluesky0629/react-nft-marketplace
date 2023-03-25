import { combineReducers } from "redux";

import countsReducer from "./reducers/count.reducers";

export default combineReducers({
  counts: countsReducer
});
