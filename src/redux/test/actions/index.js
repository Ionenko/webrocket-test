import {
  FETCH_DATA,
  DELETE_ITEM,
} from '../types';

const fetchData = value => ({
  type: FETCH_DATA,
  payload: value,
});

const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: id,
});

export {
  fetchData,
  deleteItem,
};
