import axios from "../helpers/axios";
import { categoryConstant } from "./constants";


export const getAllCategory = () => {
    return async dispatch => {

        dispatch({ type: categoryConstant.GET_ALL_CATEGORIES_REQUEST});
        const res = await axios.get(`category/getcategory`);
        console.log(res);
        if (res.status === 200) {

            const { categoryList } = res.data;

            dispatch({
                type: categoryConstant.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories: categoryList }
            });
        } else {
            dispatch({
                type: categoryConstant.GET_ALL_CATEGORIES_FAILURE,
                payload: { error: res.data.error }
            });
        }


    }
}

export const addCategory=(form)=>{
    return async dispatch=>{
        dispatch({type : categoryConstant.ADD_NEW_CATEGORY_REQUEST});
        const res=await axios.post(`/category/create`,form);
        console.log(res);
        if(res.status===201){
            // const {categoryList}=res.data;
            dispatch({
                type:categoryConstant.ADD_NEW_CATEGORY_SUCCESS,
                payload:{ category: res.data.category}
            });
           
        }else{
            dispatch({
                type:categoryConstant.ADD_NEW_CATEGORY_FAILURE,
                payload:{
                    error:res.data.error
                }
            })
        }
    }
}

export const updateCategories = (form) => {
    return async dispatch => {
        dispatch({ type: categoryConstant.UPDATE_CATEGORIES_REQUEST });
        const res = await axios.post(`/category/update`, form);
        if (res.status === 201) {
            dispatch({ type: categoryConstant.UPDATE_CATEGORIES_SUCCESS });
            dispatch(getAllCategory());
            console.log(res);
        } else {
            const { error } = res.data;
            dispatch({
                type: categoryConstant.UPDATE_CATEGORIES_FAILURE,
                payload: { error }
            });
            console.log(res);
        }
    }
}

export const deleteCategories = (ids) => {
    return async dispatch => {
        dispatch({ type: categoryConstant.DELETE_CATEGORIES_REQUEST });
        const res = await axios.post(`/category/delete`, {
            payload: {
                ids
            }
        });
        if (res.status === 201) {
            dispatch(getAllCategory());
            dispatch({ type: categoryConstant.DELETE_CATEGORIES_SUCCESS });
        } else {
            const { error } = res.data;
            dispatch({
                type: categoryConstant.DELETE_CATEGORIES_FAILURE,
                payload: { error }
            });
        }
    }
}