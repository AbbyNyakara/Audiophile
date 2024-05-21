// https://audiophilekdg.netlify.app/
import './home.scss'

const Home = () => {
  return (
    <div className='home_background main_page'>
      <nav className='top navbar_top navbar_nav'>
       <img src="/images/shared/tablet/icon-hamburger.svg" alt="" className='humbuger_icon ' />
       <img src="/images/shared/desktop/logo.svg" alt="" className='logo' />
       <img src="/images/shared/desktop/icon-cart.svg" alt="" className='cart_icon' />
      </nav>
    </div>
  )
}

export default Home;