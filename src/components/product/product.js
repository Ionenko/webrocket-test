import React, {useEffect, useState} from 'react';
import block from 'bem-cn-lite';
import './product.scss';
import Label from '../ui/label';
import Icon from '../ui/icon';
import Button from '../ui/button';
import InputNumeric from '../ui/input-numeric';
import {formatPrice} from '../../helpers/numberUtils';
import {connect} from "react-redux";
import {deleteItem} from "../../redux/test/actions";

const p = block('product');

const Product = ({data, deleteItem}) => {
  const {
    id,
    deliveryTime,
    freightType,
    imgUrl,
    locationArea,
    title,
    unitPrice,
    freightCharges,
    attributes: {
      general: {
        operatorLock,
        packaging,
      },
    },
  } = data;

  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(count * unitPrice);

  useEffect(() => {
    setTotalPrice(count * unitPrice);
  }, [count, totalPrice]);

  function handleChange(value) {
    setCount(value);
  }

  function handleDelete() {
    deleteItem(id);
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
                operatorLock && (
                <Label variant={
                operatorLock.toLowerCase() === 'unlocked' ? 'primary' : 'secondary'}
                >
                  {operatorLock}
                </Label>
                )
              }
            </div>
          </div>
        </div>
        <div className={p('location', 'products__cell')}>{locationArea}</div>
        <div className={p('quantity', 'products__cell')}>
          <InputNumeric onChange={handleChange} min={1} max={100} value={count} />
        </div>
        <div className={p('avg-price', 'products__cell')}>
          {formatPrice(unitPrice)}/unit
        </div>
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
            <li>
              <span>Freight Type: </span>
              {freightType}
            </li>
            <li>
              <span>Est Delivery Time: </span>
              {deliveryTime}
            </li>
            {freightCharges && (
              <li>
                <span>Freight Charges: </span>
                {formatPrice(freightCharges)}
              </li>
            )}
          </ul>
        </div>
      </div>

    </div>

  );
};

const mapDispatchToProps = {
  deleteItem,
};

export default connect(null, mapDispatchToProps)(Product);
