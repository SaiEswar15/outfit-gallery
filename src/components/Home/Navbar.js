import React, { useEffect } from 'react'
import Logos from "../../data/data.json"
import { Space } from 'antd';
import {MenuOutlined} from '@ant-design/icons';
import "../../styles/Navbar.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { operationsActions } from '../../store/operationsSlice';
// import Sidebar from './Sidebar';

function Navbar() {
  console.log("Navbar");

  const showMoreButton = useSelector((state)=>state.operations.showMoreButton);
  const dispatch = useDispatch()

  // function openSidebar()
  // {
    
  //   dispatch(operationsActions.changeSidebarStatus("block"));
  //   dispatch(operationsActions.changeShowMoreButtonStatus("none"));
  // }

  let styleObj = {
    display : showMoreButton
  }

  useEffect(()=>{

  },[dispatch])

  return (
    <>
    {/* <Sidebar></Sidebar> */}
    <div className = "nav-container">
      <Link to = "/">
      <div>
        <img src = {Logos.logo} alt = "logo" height = "100px" width = "100px"/>
      </div>
      </Link>
      <div>
        <p className='outfit-gallery'>OUTFIT GALLERY</p>
      </div>
      <div className='menuOutlined' >
        <Space>
          <MenuOutlined className='menuOutlined-main' style = {styleObj}/>
        </Space>
      </div>
    </div>
    </>
  )
}

export default Navbar