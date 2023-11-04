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
        // console.log("hai")
        let allData = datajson.products;
        // console.log(allData);
        dispatch(apiActions.changeSearchData(allData));
        dispatch(apiActions.addFirstData(allData));
        Navigate("/search")
    }
  return (<>
    <h1 className='deals-heading'>Trending Deals Today</h1>
    <div className='pro-container'>
        {data && data.length>0 && data.map((el, index)=>{
            let styleObj = {

                width : '100px',
                height : '100px',
                backgroundImage : `url(${el.images[0]})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
            }
            return (
                <div className='pro-items' key={el.id || index} onClick = {()=>moveToProductPage(el,dispatch,Navigate,apiActions)}>
                    <div className='pro-items-image' style={{ width: '100px', height: '100px', backgroundColor: 'white' }}>
                        <div className="pro-image" style={styleObj}></div>
                    </div>
                    <div className='pro-items-details'>
                        <div className='pro-title'><p>{el.title}</p></div>
                        <p className='pro-price'>Rs. {el.price1}/-</p>
                        <p className='pro-price2'>M.R.P : {el.price2}/-</p>

                        <p className="pro-special-price">Sizes Available </p>
                        <div className="pro-sizes-align">
                            {el.sizes && el.sizes.map((ele)=>{
                                return <div className="pro-sizes-align-inside">
                                <p className="pro-sizes-main">{ele}</p>
                                </div>
                            })}
                        </div>
                    </div>
                    
                </div>
            )
        })}
        <div className='pro-items' onClick={addSearchData}>
            <p>See all Products</p>
        </div>
    </div>
    </>
  )
}

export default Products