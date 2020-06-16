import {
  FETCH_DATA,
  DELETE_ITEM,
} from '../types';

const INITIAL_STATE = {
  cartData: null,
};


export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_DATA:
      return {
        ...state,
        cartData: payload,
      };

    case DELETE_ITEM:
      return {
        ...state,
        cartData: {
          ...state.cartData,
          cartLines: state.cartData.cartLines.filter(o => o.id !== payload),
        },
      };
    default:
      return state;
  }
};
