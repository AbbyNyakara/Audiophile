// https://audiophilekdg.netlify.app/
import Home from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import Speaker from "./Components/ZX9-Speaker/Speaker";
import Zx7Speaker from "./Components/ZX7-Speaker/zx7-Speaker";
import './index.scss';

const App = () => {
  return(
    <div className="">
      <Home/>
      <Products /> 
      <Speaker />
      <Zx7Speaker />
    </div>
  )
}


export default App;