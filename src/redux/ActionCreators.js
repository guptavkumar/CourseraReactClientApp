import { Form } from 'reactstrap';
import * as ActionTypes from './ActionTypes'
import {DISHES} from '../shared/dishes';
import { actionTypes } from 'react-redux-form';
import {baseUrl} from '../shared/baseUrl';

export const addComment = (comment)=>({ 
    type: ActionTypes.ADD_COMMENT,
    payload : comment
});

export const postComment =(dishId, rating, author,comment)=>(dispatch)=>
    {
        const newComment ={
            dishId:dishId,
            rating:rating,
            author:author,
            comment:comment
        }
        newComment.date = new Date().toISOString();

        return fetch(baseUrl+'comments', 
        {
            method:"POST",
            body:JSON.stringify(newComment),
            headers:
            {
                "Content-Type":"application/json"
            },
            credentials:"same-origin"
        }).then(response => 
            {
                if(response.ok)
                {
                    return response;
                }else 
                {
                    var error = new Error('Error' + response.status+" :" + response.message);
                    error.response = response;
                    throw error;
                }
            })
            .then(response=>response.json())
            .then(response=>dispatch(addComment(response)))
            .catch(error=>{console.log('Post comments',error.message);alert("Your message coulsn't be added")})
    }

export const fetchDishes=()=>(dispatch)=>
{
    dispatch(dishesLoading(true));

    return fetch(baseUrl+'dishes')
    .then(response=>
        {
            if(response.ok)
            {
                return response;
            }
            else
            {
                var error = new Error("Error :" + response.status + " : "+response.statusText );
                error.response = response;
                throw error;
            }
        },
        err=>
        {
            var errMsg = new Error(err.message);
            throw errMsg;
        }
         )
    .then(response=>response.json())
    .then(dishes=>dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error))) ;
}

export const fetchComments=()=>(dispatch)=>
{
    return fetch(baseUrl+'comments')
    .then(response=>
        {
            if(response.ok)
            {
                return response;
            }
            else
            {
                var error = new Error("Error :" + response.status + " : "+response.statusText );
                error.response = response;
                throw error;
            }
        },
        err=>
        {
            var errMsg = new Error(err.message);
            throw errMsg;
        }
    )
    .then(response=>response.json())
    .then(comments=>dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error))) ;
}

export const fetchPromos=()=>(dispatch)=>
{
    dispatch(promosLoading(true));

    return fetch(baseUrl+'promotions')
    .then(response=>
        {
            if(response.ok)
            {
                return response;
            }
            else
            {
                var error = new Error("Error :" + response.status + " : "+response.statusText );
                error.response = response;
                throw error;
            }
        },
        err=>
        {
            var errMsg = new Error(err.message);
            throw errMsg;
        }
    )
    .then(response=>response.json())
    .then(promos=>dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error))) ;
}

export const fetchLeaders=()=>(dispatch)=>
{
    dispatch(leadersLoading(true));

    return fetch(baseUrl + 'leaders')
    .then(response =>
        {
            if(response.ok)
            {
                return response
            }else 
            {
                var error = new Error("Error :" + response.status +" : " +response.message)
                error.response = response;
                throw error;
            }
        }).then(response=>response.json()
        ).then(leaders=>dispatch(addLeaders(leaders)))
        .catch(error=>{dispatch(leadersFailed(error))});
}

export const dishesLoading=()=>
({
    type:ActionTypes.DISHES_LOADING
});

export const dishesFailed =(errMsg)=>(
    {
        type:ActionTypes.DISHES_FAILED,
        payload:errMsg
    }
);

export const addDishes=(dishes)=>(
    {
        type:ActionTypes.ADD_DISHES,
        payload:dishes
    }
);


export const promosLoading=()=>
({
    type:ActionTypes.PROMOS_LOADING
});


export const leadersLoading=()=>
({
    type:ActionTypes.LEADERS_LOADING
});

export const promosFailed =(errMsg)=>(
    {
        type:ActionTypes.PROMOS_FAILED,
        payload:errMsg
    }
);

export const addPromos=(promos)=>(
    {
        type:ActionTypes.ADD_PROMOS,
        payload:promos
    }
);

export const addLeaders=(leaders)=>
(
    {
    type:ActionTypes.ADD_LEADERS,
    payload:leaders
    }
);

export const commentsFailed =(errMsg)=>(
    {
        type:ActionTypes.COMMENTS_FAILED,
        payload:errMsg
    }
);

export const leadersFailed=(errMsg)=>(
    {
        type:ActionTypes.LEADERS_FAILED,
        payload:errMsg
    }
)
export const addComments=(comments)=>(
    {
        type:ActionTypes.ADD_COMMENT,
        payload:comments
    }
);


export const postFeedback =(feedback)=>(dispatch)=>
    {
        
        const feedbackVlues = {
            firstname:feedback.firstname,
            lastname:feedback.lastname,
            telnum:feedback.telnum,
            email:feedback.email,
            agree:feedback.agree,
            contactType:feedback.contactType,
            message:feedback.message
       };
        feedbackVlues.date = new Date().toISOString();
      
console.log("Feedback values",feedbackVlues);
      return fetch(baseUrl+'feedback', 
        {
            method:"POST",
            body:JSON.stringify(feedbackVlues),
            headers:
            {
                "Content-Type":"application/json"
            },
            credentials:"same-origin"
        }).then(response => 
            {
                if(response.ok)
                {
                    return response;
                }else 
                {
                    var error = new Error('Error' + response.status+" :" + response.message);
                    error.response = response;
                    throw error;
                }
            })
            .then(response=>response.json())
            .then(response=>dispatch(addFeedback(response)))
            .catch(error=>{console.log('Post comments',error.message);alert("Your message coulsn't be added")})
    }

    
export const addFeedback = (feedback)=>({ 
    type: ActionTypes.ADD_FEEDBACK,
    payload : feedback
});