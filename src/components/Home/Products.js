import React from 'react'
import datajson from "../../data/data.json"
import "../../styles/Products.css"
// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { apiActions } from '../../store/apiSlice';
import { useNavigate } from 'react-router-dom';
import { moveToProductPage } from '../../utilities/searchUtilities';

function Products() {

    const dispatch = useDispatch();
    const Navigate = useNavigate();

    let data = datajson.products.slice(0,5);

    function addSearchData()
    {
        console.log("hai")
        let allData = datajson.products;
        console.log(allData);
        dispatch(apiActions.changeSearchData(allData));
        dispatch(apiActions.addFirstData(allData));
        Navigate("/search")
    }
  return (<>
    <h1 className='deals-heading'>Trending Deals Today</h1>
    <div className='search-container'>
        {data && data.map((el)=>{
            let styleObj = {

                width : '100px',
                height : '100px',
                backgroundImage : `url(${el.images[0]})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
            }
            return (
                <div className='search-items' onClick = {()=>moveToProductPage(el,dispatch,Navigate,apiActions)}>
                    <div className='search-items-image' style={{ width: '100px', height: '100px', backgroundColor: 'white' }}>
                        <div class="search-image" style={styleObj}></div>
                    </div>
                    <div className='search-items-details'>
                        <div className='search-title'><p>{el.title}</p></div>
                        <p className='search-price'>Rs. {el.price1}/-</p>
                        <p className='search-price2'>M.R.P : {el.price2}/-</p>

                        <p className="search-special-price">Sizes Available </p>
                        <div className="search-sizes-align">
                            {el.sizes && el.sizes.map((ele)=>{
                                return <div className="search-sizes-align-inside">
                                <p className="search-sizes-main">{ele}</p>
                                </div>
                            })}
                        </div>
                    </div>
                    
                </div>
            )
        })}
        <div className='search-items' onClick = {addSearchData}>
            
            <p>See all Products</p>
            
        </div>
    </div>
    </>
  )
}

export default Products