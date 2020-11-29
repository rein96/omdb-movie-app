import React from 'react'
import PropTypes from "prop-types";
import './Button.scss'

const Interface = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
  // disabled: PropTypes.bool,
  // fullWidth: PropTypes.bool
}

function Button({ type = 'button', className = '', children, onClick = () => {} }) {
  return (
    <button type={type} className={`button-app cursor-pointer ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = Interface

export default Button
