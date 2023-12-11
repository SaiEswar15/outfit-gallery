import React, {useState} from 'react'
import { Button, Modal } from 'antd';
import "../../styles/HomePopUp.css"

function HomePopUp() {

    const [isModalOpen, setIsModalOpen] = useState(true);

    // const showModal = () => {
    //     setIsModalOpen(true);
    //   };
    
      const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };


  return (
    <Modal title="OUTFIT GALLERY" 
    open={isModalOpen} 
    onOk={handleOk} 
    onCancel={handleCancel}
    footer = {null}
    
    >
        <div className="marquee-container">
            <div className="marquee-content">
                <span className="marquee-note"> Note :</span>
                <span> </span>Welcome to Outfit Gallery, 
                we appreciate your time at our website but 
                we are pleased to inform you that our website is 
                still a <span className="marquee-identity">work in progress</span>.
            </div>
        </div>
        <div className='Homepopup'>
            <img src = "https://media.licdn.com/dms/image/C4E12AQE98dfpdYhxZA/article-cover_image-shrink_423_752/0/1610116669577?e=1707955200&v=beta&t=QmOtGfi1G941I4GAd7UT_Kcr0qaQOUCEa_21KdRj3cE"
            alt = "progress"
            width = "70%"/>
        </div>
        <div>
            <Button type="primary"
            style={{ background: 'black', color: 'white' }}
            onClick={handleOk}
            >Explore {'>'}{'>'}</Button>
        </div>
      </Modal>
  )
}

export default HomePopUp