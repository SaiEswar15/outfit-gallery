
import React,{useEffect} from 'react';
import Navbar from '../Home/Navbar'
import "../../styles/ProductPage.css"
import { Image } from 'antd';
import { useSelector } from 'react-redux';

function ProductPage() {

   let productdata = useSelector((state)=>state.api.productData)

    let phoneNumber = 9491905897;

    let styleObj = {

        width : '100%',
        height : '50vh',
        backgroundColor : "rgb(246, 246, 246)",
        backgroundImage : `url(${productdata.images[0]})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
    }

    let styleObj1 = {
        backgroundColor : "white",
        padding : `10px`
    }

    let styleObj2 = {
        
        backgroundColor : `${productdata.color}`
    }

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, []);


    function purchase(productdata)
    {
        console.log(productdata);
        const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=I want to buy this/these ${productdata.subCategory}: ${productdata.images[0]} named ${productdata.title} of size ${productdata.sizes[0]} for price ${productdata.price1}`;
        window.location.href = whatsappLink;
    }
  
  
  return (
    <div className='productpage-start'>
        <Navbar></Navbar>
        {productdata && 
        <div className="product-page-con">

            <p className="product-nav">Home / Products / {productdata.category}</p>
            
            <div className="product-title-con">
                <p className="product-title-1">{productdata.title}</p>
            </div>

            <div className='product-image-con'>
                <div className="image-holder">
                    <div className="product-picture" style={styleObj}></div>
                </div>

                <div className='product-preview'>
                    <Image.PreviewGroup
                        style = {styleObj1}
                        preview={{
                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }}
                    >
                        {productdata && productdata.images && productdata.images.map((ele,index)=>{
                            return (
                                <div key={index} className = "every-image-con">
                                    <Image 
                                    style = {styleObj1} 
                                    width={70}
                                    src={ele} />
                                </div>
                            )
                        })}
                    </Image.PreviewGroup>
                </div>

                <div className="product-price-con">
                    <p className="special-price">Special Price </p>
                    <p className="product-price-para">
                        <span className="price-main">Rs. {productdata.price1}/-</span>
                        
                        <span className="strike"> Rs. {productdata.price2}</span>
                        <span className="off"> (10% off) </span>
                    </p>
                </div>

                <div className="image-below-buttons">
                    <button className='buyNow-btn' onClick = {()=>{purchase(productdata)}}>Buy from Whatsapp</button>
                </div>
            </div>

            <div className="product-size-con">
                <p className="special-price">Sizes Available </p>
                <div className="sizes-align">
                    {productdata && productdata.sizes && productdata.sizes.map((el,index)=>{
                        return <div key = {index} className="sizes-align-inside">
                        <div className="sizes-main"><p>{el}</p></div>
                        <p>{productdata.typeOfSize}</p>
                        </div>
                    })}
                </div>

                <div className="product-color">
                    <span>Color : </span>
                    <div className = "product-color-fill" style = {styleObj2}></div>
                    <span>{productdata.color}</span>  
                </div>

            </div>

            <div className="product-details-con">
                <div className='product-details-main'>
                
                <p className="product-title">{productdata.title}</p>
                <br/>
                <p className="product-brand">Brand : {productdata.brand}</p>
                <br/>
                <p className="product-cat">Category : <span className="product-cat-span">{productdata && productdata.category && productdata.category.toUpperCase()}</span></p>
                <br/>
                
                <p className="product-sub-cat">Sub Category : {productdata.subCategory}</p>
                <br/>
                <p className="product-type-cat">Type of Footwear : {productdata.typeCategory}</p>
                <div className="product-story">
                    <br/>
                    <p>Product Story :</p>
                    <br/>
                    <p>{productdata.productStory}</p>
                </div>

                <br/>

                <div className="product-desc"> 
                    <p>Description :</p>
                    <br/>
                    {productdata && productdata.description && productdata.description.map((el, index)=>{
                        return <>
                            <p key = {index}>{el}</p>
                            <br/>
                        </>
                    })}
                    </div>
                
                </div>
            </div>

        </div>}
    </div>
  )
}

export default ProductPage;

