const fetchCart = (id) => async (dispatch)=> {
    console.log("id in cart Action", id)
    dispatch({type: "FETCH_CART_REQUEST"})
    try {
         const response = await fetch(`https://fakestoreapi.com/products/${id}`)
         const fetchedCart = await response.json();
         console.log("reponse in cart action = ", fetchedCart)
         dispatch({type: "FETCH_CART_SUCCESS", payload: fetchedCart})
    }     
    catch (error) {
        dispatch({type:"FETCH_CART_FAILURE", payload:error});
        
    }
}
const deleteCartItem = (id) => async (dispatch) => {
    console.log("delete id is ",id)
    try {
      dispatch({ type: "DEL_CART_ITEM_SUCCESS", payload: id });
    } catch (error) {
      dispatch({ type: "DEL_CART_ITEM_FAILURE", payload: error });
    }
  };

export default {
    fetchCart,
    deleteCartItem
};
