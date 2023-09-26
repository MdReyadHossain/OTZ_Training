import {all} from 'redux-saga/effects';
import userSaga from "./actions/user/userSaga";
export default function* rootSaga(): any {
    yield all([
        userSaga(),
    ]);
}
