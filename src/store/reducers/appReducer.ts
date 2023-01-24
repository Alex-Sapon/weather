import { put, takeEvery } from 'redux-saga/effects';

import { changeTheme, setCoordinates, setInitialize } from '@/store/actions';

const initialState: StateType = {
  isInitialized: false,
  theme: 'light',
  latitude: null,
  longitude: null,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const appReducer = (state: StateType = initialState, action: ActionType) => {
  switch (action.type) {
  case 'APP/CHANGE-APP-THEME':
    return { ...state, theme: action.payload };
  case 'APP/SET_COORDINATES':
    return {
      ...state,
      latitude: action.payload.latitude,
      longitude: action.payload.longitude,
    };
  case 'APP/SET_INITIALISE':
    return { ...state, isInitialized: action.payload };
  default:
    return state;
  }
};

export function* setCoordinatesWorker() {
  navigator.geolocation.getCurrentPosition((position) => {
    setCoordinates(
      position.coords.latitude, position.coords.longitude,
    );
  });

  yield put({ type: 'LOAD_WEATHER_DATA' });
}

export function* watchApp() {
  yield takeEvery('SET_COORDINATES', setCoordinatesWorker);
}

type StateType = {
  isInitialized: boolean
  theme: string
  latitude: number | null
  longitude: number | null
};

type ActionType =
  | ReturnType<typeof changeTheme>
  | ReturnType<typeof setCoordinates>
  | ReturnType<typeof setInitialize>;
