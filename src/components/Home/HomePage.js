import React from 'react'
import Brands from './Brands'
import Navbar from './Navbar'
import Category from './Category'
import Products from './Products'

import { HelmetProvider } from 'react-helmet-async'
import HomePopUp from './HomePopUp'


function HomePage() {
  return (
    <>
    <HelmetProvider>
      <title>Outfit Gallery </title>
      <meta name = "keywords" content = "Outfit Gallery, Visakhapatnam, Shoes, Shopping, Chaitanya Katta, Marripalem, Online Display Shopping, Outlet"/>
      <meta name = "description" content = "Explore Shoes of premium brands and Categories at our outlet in Visakhapatnam with lowest prices on premium quality brands"/>
      <link rel="canonical" href='/'/>
    </HelmetProvider>
    
    <Navbar></Navbar>
    <HomePopUp></HomePopUp>
    <Products></Products>
    <Brands></Brands>
    <Category></Category>
    
    </>
  )
}

export default HomePage