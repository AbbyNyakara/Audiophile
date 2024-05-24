import PropTypes from 'prop-types';
import './productcard.scss';

ProductCard.PropTypes = {
  image: PropTypes.string,
  product: PropTypes.string
}


const ProductCard = () => {
  return (
    <div>
      <img src={this.props.image} alt="" />
      <h2>{this.props.product}</h2>
    </div>
  )
}

export default ProductCard;