import ProductCard from '../ProductCard/ProductCard';
import './products.scss';
// Import the images: 
import headphonesImg from '/images/shared/desktop/image-category-thumbnail-headphones.png';
import speakerImg from '/images/shared/desktop/image-category-thumbnail-speakers.png';
import earphonesImg from '/images/shared/desktop/image-category-thumbnail-earphones.png';


const Products = () => {
  return (
    <div>
      <ProductCard image = { headphonesImg }  product= 'headphones' link='#' />
      <ProductCard image = { speakerImg }  product= 'speakers' link='#' />
      <ProductCard image = { earphonesImg }  product= 'earphones' link='#' />
    </div>
  )
}

export default Products;