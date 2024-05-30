// https://audiophilekdg.netlify.app/

import Home from "./Components/Hero/Hero";
//import Products from "./Components/Products/Products";
import ProductCard from "./Components/ProductCard/ProductCard";
import './index.scss';

const App = () => {
  return(
    <div className="">
      <Home/>
      {/* <Products /> */}
      <ProductCard />
    </div>
  )
}


export default App;