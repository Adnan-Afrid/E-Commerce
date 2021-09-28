const initialState={
    fetchCart:[],
    loading: false,
    error:null,
    subTotal: 0
}
const cartReducer = (state=initialState, action)=>{
    switch(action.type){
        case "FETCH_CART_REQUEST":
            return{
                ...state, 
                loading:true,
                error:null,

            }
        case "FETCH_CART_SUCCESS":
            return{
                ...state,
                loading:false,
                fetchCart:[...state.fetchCart,action.payload]
            }  
            
        case "FETCH_CART_FAILURE":
            return{
                ...state,
                loading:false,
                error:action.payload
            }   
           
            case "DEL_CART_ITEM_SUCCESS":
               return{
                   ...state, 
                   fetchCart:state.fetchCart.filter((item,index)=>index!==action.payload),
               }
                     
             
              case "DEL_CART_ITEM_FAILURE":
                return {
                  ...state,
                  loading: false,
                };
              case "EMPTY_CART_SUCCESS":
                return {
                  cartItems: [],
                  loading: false,
                };
        default :
        return state;       
    }
}


export default cartReducer;
   