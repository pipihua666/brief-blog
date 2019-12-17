import {actionTypes} from './index';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    focused: false,
    updownMouseEnter:false,
    registerMouseEnter:false,
    titleMouseEnter:false,
    mouseIn:false,
    list:[],
    page:0,
    totalPage:0,
    searchValue:''
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.TO_BE_FOCUS: {
            return state.set('focused',true);
        }
        case actionTypes.TO_BE_BLUR: {
            return state.set('focused',false);
        }
        case actionTypes.GET_SEARCH_LIST:{
            return state.merge({
                list:action.data,
                totalPage:action.data.size
            });
        }
        case actionTypes.MOUSE_ENTER:{
            return state.set('mouseIn',true);
        }
        case actionTypes.MOUSE_LEAVE:{
            return state.merge({
                mouseIn:false,
            });
        }
        case actionTypes.CHANGE_PAGE:{
            return state.set('page',action.page);
        }
        case actionTypes.UPDOWN_MOUSE_ENTER:{
            return state.set('updownMouseEnter',true);
        }
        case actionTypes.UPDOWN_MOUSE_LEAVE:{
            return state.set('updownMouseEnter',false);
        }
        case actionTypes.SIGN_MOUSE_ENTER:{
            return state.set('registerMouseEnter',true)
        }
        case actionTypes.SIGN_MOUSE_LEAVE:{
            return state.merge({
                registerMouseEnter:false,
            });
        }
        case actionTypes.TITLE_MOUSE_ENTER:{
            return state.set('titleMouseEnter',true);
        }
        case actionTypes.TITLE_MOUSE_LEAVE:{
            return state.set('titleMouseEnter',false);
        }
        case actionTypes.INFO_TO_SEARCH:{
            return state.set('searchValue',action.item);
        }
        default: return state;
    }
}