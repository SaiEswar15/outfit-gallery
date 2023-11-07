export function moveToProductPage(el,dispatch,Navigate,apiActions)
{
    console.log(el);
    dispatch(apiActions.changeProductData(el))
    dispatch(apiActions.changeLoginStatus(true))
    sessionStorage.setItem("productDataOG",JSON.stringify(el))
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
    dispatch(apiActions.addFirstData(brandData));
    sessionStorage.setItem("productDataOG",JSON.stringify(brandData))
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
    dispatch(apiActions.addFirstData(categoryArray));
    sessionStorage.setItem("productDataOG",JSON.stringify(categoryArray))
    Navigate("/search");
}

export function toggle()
{
    const sidebar = document.getElementsByClassName(".sidebar")
    const sidebarOpen = document.getElementsByClassName(".sidebarOpen")
    if (sidebar.classList.contains('sidebarClosed')) {
        // Open the sidebar
        sidebar.classList.remove('sidebarClosed');
        sidebar.style.transform = 'translateX(0)';
        sidebarOpen.style.marginLeft = '250px'; // Adjust to match your sidebar width
    } else {
        // Close the sidebar
        sidebar.classList.add('sidebarClosed');
        sidebar.style.transform = 'translateX(-250px)';
        sidebarOpen.style.marginLeft = '0';
    }
}

