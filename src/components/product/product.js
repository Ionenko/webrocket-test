import React, {useEffect, useState} from 'react';
import block from 'bem-cn-lite';
import './product.scss';
import * as NumericInput from "react-numeric-input";
import Label from '../ui/label';
import Badge from "../ui/badge";
import Icon from "../ui/icon";
import Button from "../ui/button";
import InputNumeric from "../ui/input-numeric";
import {formatPrice} from "../../helpers/numberUtils";

const p = block('product');

const Product = ({
  id,
  deliveryTime,
  freightType,
  imgUrl,
  locationArea,
  title,
  unitPrice,
 attributes: {
    general: {
      operatorLock,
      packaging,
    },
  },
}) => {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(count * unitPrice);
  const [fcPrice, setFcPrice] = useState(totalPrice * 0.1);

  useEffect(() => {
    setTotalPrice(count * unitPrice);
    setFcPrice(totalPrice * 0.1);
  }, [count, totalPrice]);

  function handleChange(value){
    setCount(value);
  }

  function handleDelete() {
    console.log('delete', id);
  }

  return (
    <div className={p()}>
      <div className={p('top', 'products__row')}>
        <div className={p('preview', 'products__cell')}>
          <div className={p('preview-img')}>
            <img src={imgUrl} alt={title} />
          </div>
          <div className={p('preview-desc')}>
            <h3 className={p('title')}>{title}</h3>
            <div className={p('labels')}>
              {packaging && <Label>{packaging}</Label>}
              {
                operatorLock && <Label variant={
                operatorLock.toLowerCase() === 'unlocked' ? 'primary' : 'secondary'}>
                  {operatorLock}
                </Label>
              }
            </div>
          </div>
        </div>
        <div className={p('location', 'products__cell')}>{locationArea}</div>
        <div className={p('quantity', 'products__cell')}>
          <InputNumeric onChange={handleChange} min={1} max={100} value={count} />
        </div>
        <div className={p('avg-price', 'products__cell')}>{formatPrice(unitPrice)}/unit</div>
        <div className={p('total', 'products__cell')}><strong>{formatPrice(totalPrice)}</strong></div>
        <div className={p('action', 'products__cell')}>
          <Button className={p('delete')} onClick={handleDelete} icon tag="span">
            <Icon size="24px" icon="trash" />
          </Button>
        </div>
      </div>
      <div className={p('bottom', 'products__row')}>
        <div className={p('details', 'products__cell')}>
          <ul>
            <li><span>Freight Type:</span> {freightType}</li>
            <li><span>Est Delivery Time: </span>{deliveryTime}</li>
            {/*<li><span>Freight Charges:</span> {fcPrice}</li>*/}
          </ul>
        </div>
      </div>

    </div>

  );
};

export default Product;