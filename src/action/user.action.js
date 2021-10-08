import axios from "../helpers/axios";
import {  userConstantS } from "./constants";

export const signup = (user) => {
    console.log(user)
    return async (dispatch) => {

        dispatch({ type: userConstantS.USER_REGISTER_REQUEST });
        const res = await axios.post('/Admin/signup', {
            ...user
        });
        if (res.status === 201) {
            const { message } = res.data;
            // localStorage.setItem('token', token);
            // localStorage.setItem('user',JSON.stringify(user));
            dispatch({
                type: userConstantS.USER_REGISTER_SUCCESS,
                payload: {
                    message
                }
            });
        } else {
            if (res.status === 400) {
                dispatch({
                    type: userConstantS.USER_REGISTER_FAILURE,
                    payload: {
                        error:res.data.error
                    }
                });
            }
        }
    }
};