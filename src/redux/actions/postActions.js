  const fetchPosts = () => async (dispatch)=> {
    dispatch({type: "FETCH_POSTS_REQUEST"})
    try {
         const response = await fetch(`https://fakestoreapi.com/products`)
         const postData= await response.json();
         dispatch({type: "FETCH_POSTS_SUCCESS", payload: postData})
    }     
    catch (error) {
        dispatch({type:"FETCH_POSTS_FAILURE", payload:error});
        
    }
}

export default {fetchPosts};
