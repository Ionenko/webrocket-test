import React from 'react';
import block from 'bem-cn-lite';
import './label.scss';

const l = block('label');

const Label = ({variant, ...props}) => {
  return (
    <span className={l({variant: variant || ''})}>
      {props.children}
    </span>
  );
};

export default Label;