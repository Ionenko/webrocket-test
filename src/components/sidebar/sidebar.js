import React, {Fragment} from 'react';
import block from 'bem-cn-lite';

import './sidebar.scss';
import ReactTooltip from 'react-tooltip';
import Icon from '../ui/icon';
import Heading from '../typography/heading';
import Label from '../ui/label';
import Button from '../ui/button';
import {formatPrice} from '../../helpers/numberUtils';
import {rebuildFreightInformation} from '../../helpers/rebuilder';

const s = block('sidebar');

const getHeadingString = type => (type === 'CIF' ?
  'Shipping from Union in ' :
  'Ready for pickup at Dachser in ');

const Sidebar = ({data, subtotal, deposit}) => {
  const freightData = rebuildFreightInformation(data);

  return (
    <aside className={s()}>
      <div className={s('inner')}>
        <div className={s('item')}>
          <div className={s('block', {light: true})}>
            <Heading className={s('heading')}>
              <p>Freight Information</p>
            </Heading>
            {
              freightData.map(obj => (
                <Fragment key={obj.locationArea + obj.freightType}>
                  <p className={s('subheading')}>
                    {getHeadingString(obj.freightType)}
                    {obj.locationArea}
                  </p>
                  <ul className={s('list')}>
                    {
                        obj.items.map(item => (
                          <li key={item.id}>
                            <Label variant="gray">{item.freightType}</Label>
                            {item.title}
                          </li>
                        ))
                      }
                  </ul>
                </Fragment>
              ))
            }
            <div className={s('footer')}>
              <ul className={s('prices')}>
                <li>
                  <span>Est Freight Charges:</span>
                  <span>$1,684.00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={s('item')}>
          <div className={s('block', {dark: true})}>
            <div className={s('head')}>
              <ul className={s('prices')}>
                <li>
                  <span>Subtotal:</span>
                  <span>{formatPrice(subtotal)}</span>
                </li>
                <li>
                  <span>
                    Deposit:
                    <Icon size="14px" color="#FF5247" data-tip data-for="depositInfo" icon="info" />
                    <ReactTooltip className="tooltip" id="depositInfo">
                      <span>Example</span>
                    </ReactTooltip>
                  </span>
                  <span>{formatPrice(deposit)}</span>
                </li>
              </ul>
            </div>
            <div className={s('total')}>
              <ul className={s('prices', {total: true})}>
                <li>
                  <strong>Total*:</strong>
                  <strong>{formatPrice(subtotal - deposit)}</strong>
                </li>
              </ul>
              <span className={s('note')}>*Due after inspection</span>
            </div>
            <ul className={s('prices')}>
              <li>
                <span>Due at Checkout:</span>
                <span>{formatPrice(deposit)}</span>
              </li>
              <li>
                <span>Due after inspection:</span>
                <span>{formatPrice(subtotal - deposit)}</span>
              </li>
            </ul>
            <Button className={s('btn')}>Finalize Your Order</Button>
          </div>
        </div>
        <div className={s('item', {offset: 'lg'})}>
          <Heading className={s('heading')}>
            <p>Helpful Links</p>
          </Heading>
          <ul className={s('links')}>
            <li>
              <Icon icon="external-link" />
              <a href="./" target="_blank">Shipping Information</a>
            </li>
            <li>
              <Icon icon="external-link" />
              <a href="./" target="_blank">Recommended Reading for Buyers</a>
            </li>
            <li>
              <Icon icon="external-link" />
              <a href="./" target="_blank">Privacy & Security</a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};


export default Sidebar;
