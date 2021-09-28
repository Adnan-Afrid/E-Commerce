const fetchCategory = (category) => async (dispatch)=> {
    console.log("category in categoryActions", category)
    dispatch({type: "FETCH_CATEGORY_REQUEST"})
    try {
         const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
         const fetchedCategory = await response.json();
         dispatch({type: "FETCH_CATEGORY_SUCCESS", payload: fetchedCategory})
    }     
    catch (error) {
        dispatch({type:"FETCH_CATEGORY_FAILURE", payload:error});
        
    }
}

export default {fetchCategory};
