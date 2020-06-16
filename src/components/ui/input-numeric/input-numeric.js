import React from 'react';
import * as NumericInput from 'react-numeric-input';
import arrowIcon from '../../../img/arrow-down.svg';


const customStyle = {
  wrap: {
    background: '#fff',
    boxShadow: 'none',
    border: 'none',
    padding: 0,
    borderRadius: '2px',
    fontSize: 16,
    width: 65,
  },
  input: {
    color: '#1E1E1E',
    padding: '10px 24px 10px 8px',
    border: '1.5px solid #1E1E1E',
    borderRadius: '2px',
    marginRight: 4,
    display: 'block',
    fontWeight: 700,
    textShadow: 'none',
    maxWidth: '100%',
    outline: 'none',
    fontSize: '1.6rem',
    fontFamily: '"Lato", Arial, sans-serif',
  },
  'input:not(.form-control)': {
    border: '1.5px solid #1E1E1E',
  },
  'input:focus': {
    border: '1.5px solid #1E1E1E',
    outline: 'none',
  },
  btn: {
    background: 'transparent',
    outline: 'none',
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    width: 26,
  },
  'btn:hover': {
    background: 'transparent',
  },
  'btn:active': {
    background: 'transparent',
    boxShadow: 'none',
  },
  'btn:disabled': {
    opacity: 0.5,
    boxShadow: 'none',
    cursor: 'not-allowed',
  },
  arrowUp: {
    border: 'none',
    backgroundColor: 'transparent',
    backgroundImage: `url(${arrowIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    borderRadius: 0,
    outline: 'none',
    width: 8,
    height: 8,
    margin: '-2px 0 0 -4px',
    transform: 'rotate(180deg)',
  },
  arrowDown: {
    border: 'none',
    backgroundColor: 'transparent',
    backgroundImage: `url(${arrowIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    borderRadius: 0,
    outline: 'none',
    width: 8,
    height: 8,
    margin: '-6px 0 0 -4px',
  },
};

const InputNumeric = (props) => (
  <NumericInput style={customStyle} {...props} />
);

export default InputNumeric;