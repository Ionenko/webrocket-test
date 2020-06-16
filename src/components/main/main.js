import React from 'react';
import Select, {components} from 'react-select';
import ReactTooltip from "react-tooltip";
import Heading from '../typography/heading';
import Button from '../ui/button';
import Icon from '../ui/icon';
import Products from '../products';
import Sidebar from '../sidebar';

const destinations = [
  { value: 'New York', label: 'New York' },
  { value: 'Europe', label: 'Europe' },
];

const partners = [
  { value: 'Dachser', label: 'Dachser' },
  { value: 'Amazon', label: 'Amazon' },
];

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon icon="arrow-down" />
    </components.DropdownIndicator>
  );
};

const Main = ({cartLines, subtotal, deposit}) => {

  return (
    <div className="wrapper">
      <div className="container">
        <div className="head">
          <div className="head__content">
            <Heading size="lg">
              <h2>Your Cart</h2>
            </Heading>
            <p>Product is only available for pickup in select locations. Chose from the available locations listed below and Conextion will aggregate your order at one of our Partner 3PLs. Product will be validated and inspected and made available for pickup by you or your freight forwarder once full payment is received.</p>
          </div>
          <div className="head__actions">
            <Button icon tag="a" href="/">
              <Icon icon="share" />
              <span>Share</span>
            </Button>
            <Button icon tag="a" href="/">
              <Icon icon="print" />
              <span>Print</span>
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="content">
            <Heading>
              <span>Freight Selection:</span>
              <Icon size="14px"  data-tip data-for="fSelectionInfo" icon="info" />
              <ReactTooltip className="tooltip" id="fSelectionInfo">
                <span>Example</span>
              </ReactTooltip>
            </Heading>
            <div className="options">
              <div className="options__list">
                <div className="options__item">
                  <span>Destination City:</span>
                  <Select
                    className="select"
                    blurInputOnSelect={false}
                    classNamePrefix="select"
                    components={{DropdownIndicator}}
                    defaultValue={{ value: 'Europe', label: 'Europe' }}
                    onChange={() => console.log('change')}
                    options={destinations}
                  />
                </div>
                <div className="options__item">
                  <span>Selected Partner 3PL:</span>
                  <Select
                    className="select"
                    blurInputOnSelect={false}
                    classNamePrefix="select"
                    components={{DropdownIndicator}}
                    defaultValue={{ value: 'Dachser', label: 'Dachser' }}
                    onChange={() => console.log('change')}
                    options={partners}
                  />
                </div>
              </div>
            </div>
            <Heading>
              <p>Your Products</p>
            </Heading>
            <Products items={cartLines} />
          </div>
          <Sidebar data={cartLines} subtotal={subtotal} deposit={deposit} />
        </div>
      </div>
    </div>
  );
};

export default Main;
