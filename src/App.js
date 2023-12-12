import "./App.css"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import SearchPage from "./components/Search/SearchPage";
import ProductPage from "./components/Product/ProductPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        

        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/search" exact element={<SearchPage/>} />
          <Route path="/products" exact element={<ProductPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

