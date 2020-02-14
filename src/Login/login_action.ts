import { LOGIN_PROGERSS, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';
import loginSaga from './login_saga';
//import { loginSaga } from './login_saga';

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

//For login API call
export const makeLoginCall = (body: any) => {
    // return(dispatch: any) => {
    //     dispatch(login());
        
    // }
    // let iteration = loginSaga();
    // iteration.next();
    // iteration.next();
    // iteration.next();
    return login();
}
