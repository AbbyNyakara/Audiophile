import './home.scss';

const Home = () => {
  return (
    <div className='home_page'>
      <img src="images/home/mobile/image-header.jpg" alt="" className='main_img'/>
      <div className="intro_text">
        <h3>new product</h3>
        <p>XX99 mark ii headphones</p>
        <p>Experience natural,lifelike audio and exceptional build quality made for the 
          passionate music enthusiast </p>
        <a><button>see product</button></a>
      </div>
    </div>
  )
}

export default Home;