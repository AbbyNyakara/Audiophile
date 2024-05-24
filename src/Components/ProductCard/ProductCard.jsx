import PropTypes from 'prop-types';
import './productcard.scss';

ProductCard.PropTypes = {
  image: PropTypes.string,
  product: PropTypes.string,
  link: PropTypes.string
}

const ProductCard = () => {
  return (
    <div>
      <img src={this.props.image} alt="" />
      <h2>{this.props.product}</h2>
      <a href={this.props.link}>Link</a>
    </div>
  )
}

export default ProductCard;