import React from 'react';
import block from 'bem-cn-lite';
import './products.scss';
import Product from '../product';

const p = block('products');

const Products = ({items}) => (
  <div className={p()}>
    <div className={p('head')}>
      <div className={p('row')}>
        <div className={p('cell')}>Product</div>
        <div className={p('cell')}>Location</div>
        <div className={p('cell')}>Qty</div>
        <div className={p('cell')}>Avg Unit Price</div>
        <div className={p('cell')}>Total</div>
        <div className={p('cell')}>Remove</div>
      </div>
    </div>
    <div className={p('body')}>
      {
          items.length > 0 ? items.map(item => (
            <Product key={item.id} data={item} />
          )) : ('Empty')
        }
    </div>
  </div>
);

export default Products;
