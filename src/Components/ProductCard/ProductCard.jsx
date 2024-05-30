import PropTypes from 'prop-types';
import './productcard.scss';

// Temporary imports 
import headphonesImg from '/images/shared/desktop/image-category-thumbnail-headphones.png';
//import speakerImg from '/images/shared/desktop/image-category-thumbnail-speakers.png';
//import earphonesImg from '/images/shared/desktop/image-category-thumbnail-earphones.png';

ProductCard.PropTypes = {
  image: PropTypes.string,
  product: PropTypes.string,
  link: PropTypes.string
}

const ProductCard = () => {
  return (
    <div>
      {/* <img src={this.props.image} alt="" />
      <h2>{this.props.product}</h2>
      <a href={this.props.link}>Shop</a> */}
      <img src={headphonesImg} alt="Headphones" />
      <h2>Headphones</h2>
      <a href="#">Shop</a>
    </div>
  )
}

export default ProductCard;