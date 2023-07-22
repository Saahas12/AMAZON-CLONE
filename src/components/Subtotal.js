import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import './Subtotal.css'
export default function Subtotal() {

  
  const getCartTotal = (cart) => cart?.reduce((amount,item) => item.price + amount, 0);
  

  const [{cart}] = useStateValue();
  return (
    <div className='subtotal'>

      <CurrencyFormat
      renderText={(value) => (
        <p>
          Subtotal({cart.length} items) : <strong>{`${value}`}</strong>
        </p>
      )
    }
    decimalScale={2}
    value={getCartTotal(cart)}
    displayType={"text"}
    thousandSeparator={true}
    prefix='₹'
      />
        <button className='checkout--btn'>Proceed to checkout</button>
    </div>
  )
}
