// https://audiophilekdg.netlify.app/
import Home from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import Speaker from "./Components/ZX9-Speaker/Speaker";
import './index.scss';

const App = () => {
  return(
    <div className="">
      <Home/>
      <Products /> 
      <Speaker />
    </div>
  )
}


export default App;