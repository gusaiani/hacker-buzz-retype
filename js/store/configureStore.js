import { createStore, applyMiddleware } from 'redux';

import { autoRehydrate } from 'redux-persist';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

export default function configureStore(onComplete) {
  const store = autoRehydrate()(createStoreWithMiddleware)(
    rootReducer,
  )
}
