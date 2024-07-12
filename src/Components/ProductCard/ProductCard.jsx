import PropTypes from 'prop-types';
import './productcard.scss';

const ProductCard = (props) => {
  return (
    <div className='product_card'>
      <img src={props.image} alt="Headphones" className='product_card_image' />
      <h2 className='product_card_name'>{props.product}</h2>
      <a href={props.link} className='product_card_link'>Shop</a>
    </div>
  )
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProductCard;