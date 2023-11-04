import React from 'react'
import Logos from "../../data/data.json"
import { Space } from 'antd';
import {MenuOutlined} from '@ant-design/icons';
import "../../styles/Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  console.log("Navbar");
  return (
    <>
    <div className = "nav-container">
      <Link to = "/">
      <div>
        <img src = {Logos.logo} alt = "logo" height = "100px" width = "100px"/>
      </div>
      </Link>
      <div>
        <p className='outfit-gallery'>OUTFIT GALLERY</p>
      </div>
      <div className='menuOutlined'>
        <Space>
          <MenuOutlined style={{ fontSize: '50px' }}/>
        </Space>
      </div>
    </div>
    </>
  )
}

export default Navbar