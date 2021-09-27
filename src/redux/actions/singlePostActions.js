
const fetchSinglePost = (id) => async (dispatch) => {
    dispatch({type: 'FETCH_SINGLE_POST_REQUEST'})
    try{
        const response = await fetch(`https://fakestoreapi.com/products/`+id)
        const singlePostData = await response.json(); 
        console.log("single post data = ", singlePostData)
        dispatch(
            {
                type: "FETCH_SINGLE_POST_SUCCESS", 
                 payload: singlePostData
        }
            )
    }
    catch(error){
        dispatch({type: "FETCH_SINGLE_POST_FAILURE"})
    }
}
export default fetchSinglePost;
