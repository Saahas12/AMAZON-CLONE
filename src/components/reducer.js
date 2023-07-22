export const initialState = {
    cart: [],
    loggedInUser:null
}

const reducer = (state,action) =>{
    console.log(action)
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cart:[...state.cart, action.item]
            }
        case 'SET_LOGIN':
            return {
                ...state,
                loggedInUser: action.user
            }
        
            case 'REMOVE_FROM_CART':
                let newcart = [...state.cart]
                const index = state.cart.findIndex((cartItem) => cartItem.id === action.id)

                if(index >= 0){
                    newcart.splice(index,1)
                }

                else{
                    console.log("There are errors while removing the product from the cart")
                }

                return {...state, cart: newcart}
    }
}

export default reducer;