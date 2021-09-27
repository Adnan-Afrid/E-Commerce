import {combineReducers} from 'redux';
import PostReducers from './postReducers';
import SinglePostReducer from './singlePostReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
    PostReducers,
    SinglePostReducer,
    categoryReducer
})

export default rootReducer