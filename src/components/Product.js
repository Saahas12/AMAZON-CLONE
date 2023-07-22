import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
import FormatPrice from '../Helpers/FormatPrice'
export default function Product({id,title,image,price,rating}) {

    const[{cart},dispatch] = useStateValue()
    console.log('cart content',cart)
    const addToCart = () =>{
        dispatch({
        type: 'ADD_TO_CART',
        item:{
            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating
        }
    })
    }
  return (
    <div className='product'>
        <div className="product--info">
            <p>{title}</p>
            <p className="product--price">
                {/* <small>₹</small> */}
                <strong>{<FormatPrice price = {price}/>}</strong>
            </p>
            <div className="product--rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) =>(
                        <p>*</p>
                    ))
                }
            </div>
        </div>
        <img src={image} alt="iphone14-img"/>
        <button type='submit' className='' onClick={addToCart}>Add to cart</button>
    </div>
  )
}
