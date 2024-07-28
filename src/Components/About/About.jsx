import './About.scss';
import personImg from '/assets/shared/mobile/image-best-gear.jpg'

const About = () => {
  return(
    <div className='gear'>
      <img src={personImg} alt="Person wearing headphones" className='gear__image' />
    </div>
  )
}

export default About;