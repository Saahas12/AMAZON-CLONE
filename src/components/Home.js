import React from 'react'
import Header from './Header'
import Product from './Product'
import Footer from './Footer'
import './Home.css'
export default function Home() {
  return (
    <>
    <Header/>
    <div className="home">
      <img className='home--image'
      src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/7Pro_Inspire/D87160970_PC_Hero_3000x1200_morning_1._CB600870922_.jpg" 
      alt="banner_img" />
    

    <div className="home--row">
      <Product
      id ="121314"
      title = "Apple Iphone 14"
      price = {70000}
      rating = {4}
      image = 'https://m.media-amazon.com/images/I/61cwywLZR-L._AC_UY327_FMwebp_QL65_.jpg'/>

      <Product
      id ="121315"
      title = "Oneplus 11R 5G"
      price = {40000}
      rating = {4}
      image = 'https://m.media-amazon.com/images/I/71qjUzUt+ML._AC_UY327_FMwebp_QL65_.jpg'/>

      <Product
      id ="121316"
      title = "Asus Predator"
      price = {50000}
      rating = {4}
      image = 'https://m.media-amazon.com/images/I/710NRdecQtL._AC_UY327_FMwebp_QL65_.jpg'/>

      <Product
      id ="121317"
      title = "Boat earbuds"
      price = {1500}
      rating = {4}
      image = 'https://m.media-amazon.com/images/I/61q-2yzbBtL._AC_UY327_FMwebp_QL65_.jpg'/>

      <Product
      id ="121318"
      title = "Realme GT 2"
      price = {20000}
      rating = {5}
      image = 'https://rukminim1.flixcart.com/image/312/312/l3rmzrk0/mobile/2/l/k/-original-imagetmebhg9thpv.jpeg?q=70'/>
      
    </div>

    <div className="home--row">
      <Product
      id ="121319"
      title = "SanDisk 1TB Extreme Portable SSD 1050MB/s R, 1000MB/s W,Upto 2 Meter Drop Protection with IP55 Water/dust Resistance, HW Encryption, PC,MAC & TypeC Smartphone Compatible, 5Y Warranty, External"
      price = {8000}
      rating = {4}
      image = 'https://m.media-amazon.com/images/I/71wtYi+0t0L._AC_UY327_FMwebp_QL65_.jpg'/>

      <Product
      id ="121320"
      title = "Samsung T7 1TB Up to 1,050MB/s USB 3.2 Gen 2 (10Gbps, Type-C) External Solid State Drive (Portable SSD) Blue (MU-PC1T0H)"
      price = {7000}
      rating = {4}
      image = 'https://m.media-amazon.com/images/I/91n044oeDZL._AC_UY327_FMwebp_QL65_.jpg'/>
      
    </div>
    </div>
    <Footer/>
    </>
  )
}
