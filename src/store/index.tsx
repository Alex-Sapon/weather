import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootWatcher } from '@/sagas';
import { appReducer, openWeatherReducer } from '@/store/reducers';

const rootReducer = combineReducers({
  appReducer,
  openWeatherReducer
});

const sagaMiddleware = createSagaMiddleware();

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootWatcher);
