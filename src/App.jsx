// https://audiophilekdg.netlify.app/
import Home from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import Speaker from "./Components/ZX9-Speaker/Speaker";
import Zx7Speaker from "./Components/ZX7-Speaker/zx7-Speaker";
import './index.scss';
import Earbuds from "./Components/Earbuds/Earbuds";
import YX1Speaker from "./Components/YX1-Speaker/YX1Speaker";
import About from "./Components/About/About";
import Gear from "./Components/Gear/Gear";

const App = () => {
  return(
    <div className="">
      <Home/>
      <Products /> 
      <Speaker />
      <Zx7Speaker />
      <Earbuds />
      <YX1Speaker />
      <About />
      <Gear />
    </div>
  )
}


export default App;