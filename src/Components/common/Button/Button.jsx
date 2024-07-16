import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({backgroundColor, textColor, onClick, onHover}) => {

  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: textColor
  }

  return (
    <div>
      <button
      style = {buttonStyle}
      onClick = {onClick}
      onHover = {onHover}
      >
        see product
      </button>
    </div>
  )
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onHover: PropTypes.func
};


Button.defaultProps = {
  backgroundColor: '#007bff', // Default background color
  textColor: '#ffffff',       // Default text color
  onClick: () => {},         // Default onClick handler
  onHover: () => {}
};

export default Button

// There is nothing like onHover 
// onMouseEnter
//onMouseLeave!!