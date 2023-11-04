import React from 'react'
import Brands from './Brands'
import Navbar from './Navbar'
import Category from './Category'
import Products from './Products'

function HomePage() {
  return (
    <>
    <Navbar></Navbar>
    <Products></Products>
    <Brands></Brands>
    <Category></Category>
    
    </>
  )
}

export default HomePage