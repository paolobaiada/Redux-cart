import {createSlice} from '@reduxjs/toolkit'

const ProductSlice = createSlice({
    name:'product',
    initialState:{
        products:[
            {
                id: 1,
                name:'Paolo',
                age: 18,
                quantity:0
            },
            {
                id: 2,
                name:'Luca',
                age: 26,
                quantity:0
            },
            {
                id: 3,
                name:'Giulia',
                age: 23,
                quantity: 0
            },
        ]
       
    },
    reducers:{
        
    }
})

export default ProductSlice.reducer
