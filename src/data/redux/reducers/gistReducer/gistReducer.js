import { gistReducerInitialState } from "./gistReducerData";
import { SET_PUBLIC_GIST_LIST, SET_GIST_LOADING,SET_GIST_LIST_CACHE } from "../../types";

const gistReducer = (state = gistReducerInitialState, action) => {
  switch (action.type) {
    case SET_PUBLIC_GIST_LIST:
      return {
        ...state,
        gistList: action.payload,
      };
    case SET_GIST_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_GIST_LIST_CACHE:
      return {
        ...state,
        cacheGistList: action.payload,
      };
    default:
      return state;
  }
};

export default gistReducer;
