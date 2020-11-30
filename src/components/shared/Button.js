import React from 'react'
import PropTypes from "prop-types";
import './Button.scss'

const Interface = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
}

function Button({ type = 'button', className = '', children, onClick = () => {} }) {
  return (
    <button data-testid='button' type={type} className={`button-app cursor-pointer ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = Interface

export default Button
