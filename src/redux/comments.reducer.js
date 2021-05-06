import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes'

export const Comments = (state = {
    errMsg:null, comments:[]
}, action) =>
{
    switch(action.type)
    {
        case ActionTypes.COMMENTS_FAILED:
                return {...state, isLoading:false, errMsg:action.payload,comments:[]}
        case ActionTypes.ADD_COMMENTS:
            return{...state, isLoading:false, errMsg:null, comments:action.payload}


        case ActionTypes.ADD_COMMENT:
            var newComment = action.payload;
            return state.concat(newComment);
        default:
            return state;
    }
}