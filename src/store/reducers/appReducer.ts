import { takeEvery } from 'redux-saga/effects';

import { changeTheme } from '@/store/actions';

const initialState: StateType = {
  theme: 'light'
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const appReducer = (state: StateType = initialState, action: ActionType) => {
  switch (action.type) {
  case 'CHANGE-APP-THEME': 
    return { ...state, theme: action.payload };
  default:
    return state;
  }
};

function* changeAppTheme() {
  // const theme: string = yield select(selectAppTheme);
  //
  // yield put(changeTheme(theme === 'light' ? 'dark' : 'light'));
}

export function* watchChangeAppTheme() {
  yield takeEvery('CHANGE-APP-THEME', changeAppTheme);
}

type StateType = {
  theme: string
};

type ActionType = ReturnType<typeof changeTheme>;