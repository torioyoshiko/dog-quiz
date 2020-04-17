import React from 'react';
import './css/button.css';

const Button = (props) => (
  <button
    className="button"
    type="submit"
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default Button;
