import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData } from '../../redux/actions';
import {default as MainContainer} from "../../components/main";

const defaultProps = {
  history: {},
  fetchData: () => null,
};

const propTypes = {
  history: PropTypes.shape({}),
  fetchData: PropTypes.func,
};


const Main = ({
  cartData,
  fetchData,
}) => {
  if (!cartData) {
    fetchData({
      shippingOptions: {
        destination: 'New York',
        partner: 'Dachser',
      },
      subtotal: 29410,
      deposit: 1684,

      cartLines: [
        {
          id: 123,
          imgUrl: 'https://via.placeholder.com/150',
          title: 'iPhone 11 - 64GB - Purple',
          locationArea: 'New York',
          unitPrice: 439,
          freightType: 'FOB',
          deliveryTime: '3 - 5 days',
          attributes: {
            general: {
              packaging: 'Factory Sealed',
              operatorLock: 'Verizon',
            },
          },
        },
        {
          id: 234,
          imgUrl: 'https://via.placeholder.com/150',
          title: 'iPhone XR - Space Grey',
          locationArea: 'New York',
          unitPrice: 409,
          freightType: 'FOB',
          deliveryTime: '3 - 5 days',
          attributes: {
            general: {
              packaging: 'New in Box',
              operatorLock: 'Unlocked',
            },
          },
        },
        {
          id: 456,
          imgUrl: 'https://via.placeholder.com/150',
          title: 'Apple Airpod 2',
          locationArea: 'Dubai',
          unitPrice: 249,
          freightType: 'CIF',
          deliveryTime: '3 - 5 days',
          freightCharges: 1684,
          attributes: {
            general: {
              packaging: 'Factory Sealed',
            },
          },
        },
      ],
    });
  }

  return (
    <React.Fragment>
      {cartData && <MainContainer {...cartData} />}
    </React.Fragment>
  );
};


const mapStateToProps = ({
  testReducer: {
    cartData,
  },
}) => ({
  cartData,
});

const mapDispatchToProps = {
  fetchData,
};

Main.defaultProps = defaultProps;
Main.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Main);
