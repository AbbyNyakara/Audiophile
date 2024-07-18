import './Earbuds.scss';
import earphonesImage from '/images/home/mobile/image-earphones-yx1.jpg';

const Earbuds = () => {
  return(
      <div className='earphones'>
        <img src={earphonesImage} alt="Photo of earphones" className='earphones-image' />
      </div> 
  )
}

export default Earbuds; 