export function moveToProductPage(el,dispatch,Navigate,apiActions)
{
    console.log(el);
    dispatch(apiActions.changeProductData(el))
    Navigate("/products")
}

export function searchByBrand(el,dispatch,Navigate,apiActions,Data)
{
    const brand = el.brand;
    const productdata = Data.products;
    const brandData = productdata && productdata.filter((el)=>{
        return el.brand === brand;
    })
    dispatch(apiActions.changeSearchData(brandData))
    Navigate("/search");
}

export function searchByCategory(el,dispatch,Navigate,apiActions,Data)
{
    const cat = el.category;
    const productdata = Data.products;
    const categoryArray = productdata && productdata.filter((ele)=>{
        return ele.typeCategory === cat;
    })
    dispatch(apiActions.changeSearchData(categoryArray))
    Navigate("/search");
}

