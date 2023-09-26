import { log } from "console";
import { ForkEffect } from "redux-saga/effects";
import { all, takeEvery, fork, delay, put, call } from "typed-redux-saga";
import { attemptLoginFailed, attemptLoginSuccess } from "./userSlice";
import { RESPONSE_DELAY_TIME, RESPONSE_STATUS_SUCCESS } from "../../../helpers/constants/coreConstant";
import userService from "../../../services/user.service";

function* userWatcher() {
    yield takeEvery("user/attemptLogin", attemptLoginSaga);
}

function* attemptLoginSaga(action: any): any {
    const response = yield call(userService.attemptLogin, action.payload);
    yield delay(RESPONSE_DELAY_TIME);
    try {
        if (response == RESPONSE_STATUS_SUCCESS)
            yield put(attemptLoginSuccess())
        else
            yield put(attemptLoginFailed())
    } catch (err) {
        yield put(attemptLoginFailed())
    }
}


function* fetchResource(resource: string): Generator<ForkEffect<any>, void, any> {
    console.log("=====fetchResource=====")
}
function* fetchResourceTwo(resource: string): Generator<ForkEffect<any>, void, any> {
    console.log("=====fetchResourceTwo=====")
}

export default function* userSaga() {
    yield all([userWatcher()])
}
