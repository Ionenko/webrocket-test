import React from 'react';
import block from 'bem-cn-lite';
import IcoMoon from 'react-icomoon';
import iconSet from '../../../icoMoonSelection.json';
import './icon.scss';

const i = block('icon');

const Icon = ({...props}) => {
  return (
    <span className={i()}>
      <IcoMoon iconSet={iconSet} {...props} />
    </span>
  );
};

export default Icon;
