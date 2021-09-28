import {combineReducers} from 'redux';
import PostReducers from './postReducers';
import SinglePostReducer from './singlePostReducer';
import categoryReducer from './categoryReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    PostReducers,
    SinglePostReducer,
    categoryReducer,
    cartReducer
})

export default rootReducer