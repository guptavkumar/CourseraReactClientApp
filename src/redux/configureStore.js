import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Comments} from './comments.reducer';
import { Dishes} from './dishes.reducer';
import { Leaders} from './leaders.reducer';
import { Promotions} from './promotions.reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createForms} from 'react-redux-form';
import { InitialFeedback } from './forms.reducer';

export const ConfigureStore = ()=>
{
    const store = createStore(
        combineReducers(
            {comments: Comments, 
                dishes: Dishes, 
                leaders:Leaders,
                promotions:Promotions,
               ...createForms({feedback:InitialFeedback})
            }
            ),  applyMiddleware(thunk,logger)
    );
    return store;
}