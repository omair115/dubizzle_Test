import { all, takeLatest, put } from "redux-saga/effects";
import { setGistList, setGistLoading , setGistListCache} from "../actions/index";
import { GET_PUBLIC_GIST_LIST, GET_GIST_LIST_BY_USER, } from "../types/index";
import { getPublicGists, getGistForUser, } from "../../../services/gistService";

function* watchGetPublicGistRequest() {
  try {
    yield put(setGistLoading(true));
    const response = yield getPublicGists();
    const data = response.data;
    yield put(setGistListCache(data));
    yield put(setGistList(data));
  } catch (e) {
    console.log(e)
  } finally {
    yield put(setGistLoading(false));
  }
}

function* watchGetGistByUsernameRequest({ payload }) {
  try {
    yield put(setGistLoading(true));
    const response = yield getGistForUser(payload);
    const data = response.data;
    yield put(setGistList(data));
  } catch (e) {
    console.log(e)
  } finally {
    yield put(setGistLoading(false));
  }
}

export function* watchGistSagas() {
  yield all([
    takeLatest(GET_PUBLIC_GIST_LIST, watchGetPublicGistRequest),
    takeLatest(GET_GIST_LIST_BY_USER, watchGetGistByUsernameRequest),
  ]);
}
