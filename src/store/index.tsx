import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootWatcher } from '@/sagas/rootSaga';
import { appReducer, weatherReducer } from '@/store/reducers';

const rootReducer = combineReducers({
  appReducer,
  weatherReducer
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);
