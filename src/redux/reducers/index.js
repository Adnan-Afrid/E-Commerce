import {combineReducers} from 'redux';
import PostReducers from './postReducers';
import SinglePostReducer from './singlePostReducer';
import categoryReducer from './categoryReducer';
import cartReducer from './cartReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    PostReducers,
    SinglePostReducer,
    categoryReducer,
    cartReducer,
    loginReducer
})

export default rootReducer