import {actionTypes}  from './index';
import axios from 'axios';
import {fromJS} from 'immutable';

const searchListAction = (data) => ({
    type: actionTypes.GET_SEARCH_LIST,
    data: fromJS(data)
})

export const createBlurAction = ()=>{
    return {
        type: actionTypes.TO_BE_BLUR,
    }
}
export const createFocusAction = ()=>{
    return {
        type: actionTypes.TO_BE_FOCUS
    }
}

export const createListAction = ()=>{
    return (dispatch)=>{
        axios.get('/api/searchList.json').then((res)=>{
            dispatch(searchListAction(res.data.data));
        }).catch((error)=>{
            console.log(error.message);
        })
    }
}

export const createMouseEnterAction = ()=>({
    type: actionTypes.MOUSE_ENTER
})

export const createMouseLeaveAction = ()=>({
    type:actionTypes.MOUSE_LEAVE
})

export const createChangePageAction = (page)=>({
    type:actionTypes.CHANGE_PAGE,
    page
})

export const createUpdownAction = ()=>({
    type: actionTypes.UPDOWN_MOUSE_ENTER
})

export const createLeaveAction = ()=>({
    type: actionTypes.UPDOWN_MOUSE_LEAVE
})

export const createSignAction = ()=>({
    type:actionTypes.SIGN_MOUSE_ENTER
})

export const createSignLeaveAction = ()=>({
    type: actionTypes.SIGN_MOUSE_LEAVE
})

export const createTitleAction = ()=>({
    type:actionTypes.TITLE_MOUSE_ENTER
})

export const createTitleLeaveAction = ()=>({
    type:actionTypes.TITLE_MOUSE_LEAVE
})

export const addInfoToSearch = (item)=>({
    type:actionTypes.INFO_TO_SEARCH,
    item
})