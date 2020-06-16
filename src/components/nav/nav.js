import React from 'react';
import block from 'bem-cn-lite';
import './nav.scss';

const n = block('nav');
const Nav = ({links}) => {
  return (
    <nav className={n()}>
      {
        links.map(link => (
          <div key={link.text} className={n('item')}>
            <a href={link.path} className={n('link')}>{link.text}</a>
          </div>
        ))
      }
    </nav>
  );
};

export default Nav;
