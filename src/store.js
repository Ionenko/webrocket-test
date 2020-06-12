import { createStore, applyMiddleware } from 'redux';
import reducer from 'redux/reducers';

const init = (store) => {
  return store;
};

const configureStore = (initialState = {}) => {
  return import('redux-devtools-extension')
    .then(({composeWithDevTools}) => {
      const store = createStore(
        reducer(),
        initialState,
        composeWithDevTools(
          applyMiddleware(
          ),
        ),
      );

      return init(store);
    });
};

export default configureStore;
