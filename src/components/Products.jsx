import React from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { addToCart } from '../reduxFolder/slice/cartSlice'
import { Link } from 'react-router-dom'

const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products)
  return (
    <div style={{display: 'flex', gap:'20px'}}>
        <Link to='/cart'>Cart</Link>
       {products.map((el) => (
            <div key={el.id} style={{backgroundColor:'lightblue'}}>
                    <h1>Name: {el.name}</h1>
                    <p>Age: {el.age}</p>
                    <p style={{display:'none'}}>Quantity:{el.quantity}</p>
                    <button onClick={() => dispatch(addToCart(el))}>Add</button>
            
            </div>
       ))}
    </div>
  )
}

export default Products