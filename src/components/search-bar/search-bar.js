import React from 'react';
import block from 'bem-cn-lite';
import Icon from '../ui/icon';
import './search-bar.scss';
import Button from "../ui/button";

const s = block('search');

const SearchBar = () => (
  <form className={s()}>
    <div className={s('field')}>
      <input type="text" placeholder="Search our inventory" className={s('input')} />
      <Button icon type="submit" className={s('btn')}>
        <Icon icon="search" />
      </Button>
    </div>
  </form>
);

export default SearchBar;
