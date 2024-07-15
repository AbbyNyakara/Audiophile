import speakerImg from '/images/shared/desktop/image-category-thumbnail-speakers.png';
import './speaker.scss';

const Speaker = () => {
  return(
    <div className="zx9-speaker">
      <img src={speakerImg} alt="image of a speaker" className='' />
      <h1>ZX9 SPEAKER</h1>
      <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
      <button>see product</button>
    </div>
  )
}

export default Speaker;