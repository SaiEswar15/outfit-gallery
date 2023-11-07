import React, { useEffect } from 'react'
import "../../styles/Sidebar.css"
import Logos from "../../data/data.json"
import { Space } from 'antd';
import {MenuOutlined} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { operationsActions } from '../../store/operationsSlice';
import 'animate.css';

function Sidebar() {

    const sidebar = useSelector((state)=>state.operations.sidebar)
    console.log("sidebar", sidebar, "top")

    const dispatch = useDispatch();

    const styleObj = {
        display : sidebar,
        
    }

    function closeSidebar()
    {
        console.log("close")
        dispatch(operationsActions.changeSidebarStatus("none")) 
        dispatch(operationsActions.changeShowMoreButtonStatus("block"))
    }

    useEffect(()=>{
        console.log(sidebar, "useEffect")
    },[dispatch, sidebar])

  return (
    <div className='sidebar animate__animated animate__slideInLeft' style = {styleObj}>
        <div className = "sidebar-nav-container">
            
            <div className= "sidebar-logo-pic">
                <img src = {Logos.logo} alt = "logo" height = "100px" width = "100px"/>
            </div>
            
            <div>
                <p className='sidebar-outfit-gallery'>OUTFIT GALLERY</p>
            </div>
            <div className='sidebar-menuOutlined' onClick = {closeSidebar}>
                <Space>
                <MenuOutlined style={{ fontSize: '30px' }}/>
                </Space>
            </div>

            
        </div>
        <div className='sidebar-container'>
            <div>
                <a href = "#brands-con" onClick = {closeSidebar}>Shop by Brands</a>
            </div>

            <div>
                <a href = "#brands-con" onClick = {closeSidebar}>Shop by Category</a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar