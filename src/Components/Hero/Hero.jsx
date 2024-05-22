import './hero.scss';

const Home = () => {
  return (
    <div className='hero'>
      <div className='navbar'>
        <nav className='top navbar_top navbar_nav'>
        <img src="/images/shared/tablet/icon-hamburger.svg" alt="" className='humbuger_icon ' />
        <img src="/images/shared/desktop/logo.svg" alt="" className='logo' />
        <img src="/images/shared/desktop/icon-cart.svg" alt="" className='cart_icon' />
        </nav>
      </div>

      <div className="hero_section">
        <div >
          <h1 className="hero_main_text">new product</h1>
          <p className='hero_text'>XX99 mark ii <span>headphones</span> </p>
          <p className='hero_description'>Experience natural,lifelike audio and exceptional build quality made for the 
            passionate music enthusiast </p>
          <a className='see_more'><button>see product</button></a>
        </div>
      </div>
    </div>
  )
}

export default Home;