import { all } from "redux-saga/effects";
import { watchGistSagas } from "./gistSaga";

export default function* rootSaga() {
  yield all([watchGistSagas()]);
}
