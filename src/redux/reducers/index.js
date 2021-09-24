import {combineReducers} from 'redux';
import PostReducers from './postReducers';
import SinglePostReducer from './singlePostReducer';

const rootReducer = combineReducers({
    PostReducers,
    SinglePostReducer
})

export default rootReducer