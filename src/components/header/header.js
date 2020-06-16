import React from 'react';
import block from 'bem-cn-lite';
import './header.scss';
import logo from '../../img/logo.svg';
import SearchBar from '../search-bar';
import Icon from '../ui/icon';
import Nav from '../nav';
import Button from "../ui/button";
import Badge from "../ui/badge";

const h = block('header');

const navLinks = () => [
  {text: 'Home', path: '/home'},
  {text: 'Categories', path: '/categories'},
  {text: 'Brands', path: '/brands'},
  {text: 'Features', path: 'features'},
];

const Header = () => {
  const links = navLinks();

  return (
    <header className={h()}>
      <div className="container">
        <div className={h('content')}>
          <a href="./" className={h('logo')}>
            <img src={logo} alt="Hugge logo" />
          </a>
          <div className={h('nav')}>
            <Nav links={links} />
          </div>
          <div className={h('search')}>
            <SearchBar />
          </div>
          <div className={h('user')}>
            <a href="/">
              <span
                className="img"
                style={{backgroundImage: "url('./img/avatar.jpg')"}}
                title="User Name"
              />
            </a>
          </div>
          <div className={h('cart')}>
            <Button icon tag="span">
              <Badge content="1">
                <Icon icon="cart" />
              </Badge>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;