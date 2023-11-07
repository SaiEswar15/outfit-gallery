import React, {useEffect} from 'react'
import Navbar from '../Home/Navbar'
// import data from "../../data/data.json"
import "../../styles/SearchPage.css"
import { useDispatch, useSelector } from 'react-redux';
import { apiActions } from '../../store/apiSlice';
import { useNavigate, Link } from 'react-router-dom';
import { moveToProductPage } from '../../utilities/searchUtilities';
import { RobotOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import Functionality from './Functionality';

function SearchPage() {
    console.log("Search");
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const data = useSelector((state)=>state.api.searchData);
    const loggedin = useSelector((state)=>state.api.loggedin);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

    useEffect(()=>{

        async function getDataFromLocal()
        {
            let searchdata = sessionStorage.getItem("searchDataOG");
            if(searchdata)
            {
                console.log(searchdata, "if entered")
                let parsedData = JSON.parse(searchdata);
                dispatch(apiActions.changeSearchData(parsedData))
                dispatch(apiActions.addFirstData(parsedData));
                dispatch(apiActions.changeLoginStatus(true));
            }
            else
            {
                Navigate("/")
            }
            
        }

        if(!loggedin)
        {
            getDataFromLocal()
        }
        
        
    },[ dispatch,Navigate,loggedin]) 

  return (
    <>
    <Navbar></Navbar>
    <Functionality></Functionality>
    <div className='search-container'>
        {data && data.length>0 ? data.map((el)=>{
            let styleObj = {

                width : '100px',
                height : '100px',
                backgroundImage : `url(${el.images[0]})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
            }
            return (
                <div className='search-items' key= {el.id} onClick = {()=>moveToProductPage(el,dispatch,Navigate,apiActions)}>
                    <div className='search-items-image' style={{ width: '100px', height: '100px', backgroundColor: 'white' }}>
                        <div className="search-image" style={styleObj}></div>
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
        }) : 
        <div className='out-of-stock'>
            <Result
                icon={<RobotOutlined />}
                
                title="Sorry we are out of Stock !"
                extra={<Link to = "/"><Button type="primary">Home</Button></Link>}
            />
        </div>}
    </div>
    </>
  )
}

export default SearchPage