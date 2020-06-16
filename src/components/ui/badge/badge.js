import React, {Fragment} from 'react';
import block from 'bem-cn-lite';
import './badge.scss';

const b = block('badge');

const Badge = ({content, variant, ...props}) => (
  <Fragment>
    {props.children}
    {content && (
      <span className={b(null, variant)}>
        {content}
      </span>
    )}
  </Fragment>
);

export default Badge;