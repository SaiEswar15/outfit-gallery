import React from 'react'
import Categories from "../../data/data.json";
import "../../styles/Category.css"
import { searchByCategory } from "../../utilities/searchUtilities";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiActions } from '../../store/apiSlice';

function Category() {
    console.log("Category");

    const dispatch = useDispatch();
    const Navigate = useNavigate();

  return (
    <div className="category-container">
      <h1 className="category-heading">Shop by Category</h1>
      <div className="category-icons">
          {Categories.category.map((el,index)=>{
          return <img key = {index}
          src = {el.image} 
          alt = "category" 
          className="category-images"
          onClick = {()=>{searchByCategory(el,dispatch,Navigate,apiActions,Categories)}}
          ></img>
          })}
      </div>
    </div>
  )
}

export default Category