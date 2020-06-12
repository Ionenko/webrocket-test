import {
  FETCH_DATA,
} from '../types';

const fetchData = value => ({
  type: FETCH_DATA,
  payload: value,
});

export {
  fetchData,
};
