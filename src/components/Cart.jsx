import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { removeToCart } from '../reduxFolder/slice/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.carts)
  console.log(cart)
  return (
    <div >
      <Link to='/'>Home</Link>
      {cart.map((el) => (
        <div style={{backgroundColor:'lightcyan'}} key={el.id}>
          <h1> Name: {el.name}</h1>
          <p>Age: {el.age}</p>
          <p>Quantity: {el.quantity}</p>
          <button onClick={() => dispatch(removeToCart(el))}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default Cart