const initialState={
    postItems:{},
    loading: false,
    error:null,
}
const SinglePostReducer = (state=initialState, action)=>{
    switch(action.type){
        case "FETCH_SINGLE_POST_REQUEST":
            return{
                ...state, 
                loading:true,
                error:null,
            }
        case "FETCH_SINGLE_POST_SUCCESS":
            return{
                ...state,
                loading:false,
                postItems:action.payload
            }  
        case "FETCH_SINGLE_POST_FAILURE":
            return{
                ...state,
                loading:false,
                error:action.payload
            }   
        default :
        return state;       
    }
}
export default SinglePostReducer;