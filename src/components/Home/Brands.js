import Data from "../../data/data.json"
import React from 'react'
import "../../styles/Brands.css"
import { searchByBrand } from "../../utilities/searchUtilities";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiActions } from '../../store/apiSlice';


function Brands() {
  console.log("Brands");

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  return (
    <div className="brand-container">
      <h1 className="brand-heading">Shop by Brands</h1>
      <div className="brand-icons">
          {Data.brandLogos.map((el, index)=>{
          return <img key = {index}
          src = {el.image} 
          alt = "crocs" 
          className="brand-images"
          onClick = {()=>{searchByBrand(el,dispatch,Navigate,apiActions,Data)}}
          ></img>
          })}
      </div>
    </div>
  )
}

export default Brands