import PropTypes from 'prop-types';
import './productcard.scss';

const ProductCard = (props) => {
  return (
    <div>
      <img src={props.image} alt="Headphones" />
      <h2>{props.product}</h2>
      <a href={props.link}>Shop</a>
    </div>
  )
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProductCard;