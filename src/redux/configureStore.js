import {createStore, combineReducers} from 'redux';
import { Comments} from './comments.reducer';
import { Dishes} from './dishes.reducer';
import { Leaders} from './leaders.reducer';
import { Promotions} from './promotions.reducer';

export const ConfigureStore = ()=>
{
    const store = createStore(
        combineReducers(
            {comments: Comments, dishes: Dishes, leaders:Leaders,promotions:Promotions}
            )
    );
    return store;
}