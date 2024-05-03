import {createSlice} from '@reduxjs/toolkit'

const Cart = createSlice({
    name:'cart',
    initialState:{
        carts:[]

       
    },
    reducers:{
        addToCart:(state,action) =>{
           const element =  state.carts.find(el => el.id == action.payload.id) 
           element ? element.quantity += 1 : state.carts.push(action.payload)
        },
        removeToCart:(state,action) => {
            const element =  state.carts.find(el => el.id == action.payload.id) 
            element.quantity > 1 ? element.quantity -= 1 :  state.carts = state.carts.filter(el => el.id !== action.payload.id)
           
        }
    }
})

export default Cart.reducer
export const {addToCart,removeToCart} = Cart.actions