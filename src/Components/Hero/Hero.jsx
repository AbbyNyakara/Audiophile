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
        <div className="intro_text">
          <h1>new product</h1>
          <p>XX99 mark ii headphones</p>
          <p>Experience natural,lifelike audio and exceptional build quality made for the 
            passionate music enthusiast </p>
          <a><button>see product</button></a>
        </div>
      </div>
    </div>
  )
}

export default Home;