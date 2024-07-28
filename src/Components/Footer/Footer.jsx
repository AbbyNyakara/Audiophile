import './Footer.scss';
import facebookIcon from '/images/shared/desktop/icon-cart.svg';
import twitterIcon from '/images/shared/desktop/icon-twitter.svg';
import instagramIcon from '/images/shared/desktop/icon-instagram.svg';

const Footer = () => {
  return(
    <div className='footer'>
      <div className="footer__nav">
        <p>audiophile</p>
        <p>Home</p>
        <p>headphones</p>
        <p>speakers</p>
        <p>earphones</p>
      </div>
      <div className="footer__description">
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. 
          We&apos;re a small team of music lovers and sound specialists who are 
          devoted to helping you get the most out of personal audio. 
          Come and visit our demo facility - we’re open 7 days a week.
        </p>
      </div>

      <div className="footer__links">
        <p>Copyright 2021. All Rights Reserved</p>
        <div className="foooter__icons">
          <img src={facebookIcon} alt="" />
          <img src={twitterIcon} alt="" />
          <img src={instagramIcon} alt="" />
        </div>
      </div>


    </div>
  )
}

export default Footer;