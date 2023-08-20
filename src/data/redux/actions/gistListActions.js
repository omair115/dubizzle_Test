import {
  GET_PUBLIC_GIST_LIST,
  SET_PUBLIC_GIST_LIST,
  GET_GIST_LIST_BY_USER,
  SET_GIST_LOADING,
  SET_GIST_LIST_CACHE
} from "../types";

export const getGistPublicList = () => ({
  type: GET_PUBLIC_GIST_LIST,
});

export const setGistList = (payload) => ({
  type: SET_PUBLIC_GIST_LIST,
  payload,
});

export const getGistListByUsername = (payload) => ({
  type: GET_GIST_LIST_BY_USER,
  payload,
});

export const setGistLoading = (payload) => ({
  type: SET_GIST_LOADING,
  payload,
});

export const setGistListCache = (payload) => ({
  type: SET_GIST_LIST_CACHE,
  payload,
})
