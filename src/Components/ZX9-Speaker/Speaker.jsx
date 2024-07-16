import speakerImg from '/images/shared/desktop/image-category-thumbnail-speakers.png';
import './speaker.scss';

const Speaker = () => {
  return(
    <div className="zx9-speaker">
      <img src={speakerImg} alt="image of a speaker" className="zx9-speaker-image" />
      <h1 className='zx9-speaker-title'>ZX9 SPEAKER</h1>
      <p className='zx9-speaker-description'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
      <button className='zx9-speaker-button'>see product</button>
    </div>
  )
}

export default Speaker;