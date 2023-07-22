import React from 'react'
import Header from './Header'
import './Checkout.css'
import Subtotal from './Subtotal'
import ProductCart from './ProductCart'
import { useStateValue } from './StateProvider'
export default function Checkout() {

  const [{cart}] = useStateValue();
  return (
    <>
    <Header/>
      <div className="checkout">
        <div className='checkout--left'>

          {
            cart.length === 0 ? (
              <div>
            <h2>Your Amazon Cart is empty.</h2>
            <p>Check your Saved for later items below or continue shopping.</p>
          </div>
            ) : (
              <div>
                <h2 className="shoppingtitle">
                  Items in Shopping Cart
                </h2>
                {
                  cart.map(item =>(
                    <ProductCart
                    id={item.id} 
                    title={item.title} 
                    image={item.image} 
                    price={item.price} 
                    rating={item.rating} 
                    />
                  ))
                }
              </div>
            )

          }
          
        </div>
        {
          cart.length > 0 &&(
            <div className='checkout--right'>
                <Subtotal/>
            </div>
          )
        }
        
        
      </div>
    </>
  )
}
