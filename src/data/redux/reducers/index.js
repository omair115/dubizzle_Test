import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import gistReducer from "./gistReducer/gistReducer";

const rootReducer = combineReducers({
  gist: persistReducer({ key: "gist", storage }, gistReducer),
});

export default rootReducer;
