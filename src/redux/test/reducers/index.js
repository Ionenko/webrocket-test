import {
  FETCH_DATA,
} from '../types';

const INITIAL_STATE = {
  cartData: null,
};


export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_DATA: {
      return {
        ...state,
        cartData: payload,
      };
    }

    default:
      return state;
  }
};
