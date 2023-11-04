import React from 'react'
import { Tabs } from 'antd';
import "../../styles/Functionality.css";
import { useDispatch, useSelector } from "react-redux";
import { apiActions } from '../../store/apiSlice';

function Functionality() {

    const dispatch = useDispatch();
    const data = useSelector((state)=>state.api.searchData);
    const firstData = useSelector((state)=>state.api.firstData);

    const onChange = (key) => {
        
        let searchData = [...data];

        let sortedArray = "";
        
        if(key === "1")
        {
            sortedArray = [...firstData];
        }
        else if(key === "2")
        {
            // console.log("entered");
            sortedArray = searchData && searchData.sort((a,b)=>{
                return a.price1-b.price1;
            })
            
        }
        else if (key === "3")
        {
            sortedArray = searchData && searchData.sort((a,b)=>{
                return b.price1-a.price1;
            })
        }
        dispatch(apiActions.changeSearchData(sortedArray))
        
      };
      
      const items = [
        {
            key: '1',
            label: 'Popularity',
            children: 'Popular deals',
        },
        {
          key: '2',
          label: 'Lowest',
          children: 'Lowest to Highest price Range',
        },
        {
          key: '3',
          label: 'Highest',
          children: 'Highest to Lowest Price Range',
        }
      ];

  return (
    <div className='functionality'>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}

export default Functionality