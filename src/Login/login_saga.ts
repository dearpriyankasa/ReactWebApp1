import { put, take, all } from 'redux-saga/effects';
import { LOGIN_PROGERSS, LOGIN_FAILURE, LOGIN_SUCCESS } from './constants';

export default function* loginSaga() {
    while(true) {
        const req = yield take(LOGIN_PROGERSS);
        const json = yield fetch('https://jsonplaceholder.typicode.com/users')
                            .then(resp => resp.json())
                            .catch(err => err.json());
        
        if(json)
            yield put(loginSuccess(json));
        else
            yield put(loginFailure('Error'));
    }
}

const login = () => {
    //returns the action type to login_reducer
    return {
        type: LOGIN_PROGERSS
    }
}

const loginSuccess = (data: any) => {
    //returns the action type to login_reducer
    return {
        type: LOGIN_SUCCESS,
        data
    }
}

const loginFailure = (err: any) => {
    //returns the action type to login_reducer
    return {
        type: LOGIN_FAILURE
    }
}