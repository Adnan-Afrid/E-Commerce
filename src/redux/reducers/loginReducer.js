const initialState = {
    user:[],
    loggedIn: false
}
const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOGIN_USER":
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case "LOG_OUT_USER":
            return {
                ...state,
                user: [],
            
                loggedIn: false
            }
        default:
            return state
    }
}

export default loginReducer;