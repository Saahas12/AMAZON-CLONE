import React from 'react'
import { useStateValue } from './StateProvider'
import './ProductCart.css'
import FormatPrice from '../Helpers/FormatPrice';
export default function ProductCart({id,title,image,price,rating}) {
// eslint-disable-next-line
    const [{cart},dispatch] = useStateValue();
    const removeItem = () =>{
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }
  return (
    <div className='productcart'>
        <img src={image} alt="prod__img" className="productcart--image"/>
        <div className="productcart--info">
            <p className="productcart--title">{title}</p>
            <p className="productcart--price"><FormatPrice price = {price}/></p>
        
        <div className="productcart--rating">
            {
                Array(rating)
                .fill()
                .map((_) =>(
                    <span>*</span>
                ))
            }
        </div>
        <button onClick={removeItem} type='submit'>Remove from the Cart</button>
        </div>
    </div>
  )
}
