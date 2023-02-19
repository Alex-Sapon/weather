import { ActionType, AppStateType } from '@/store/types';

const initialState: AppStateType = {
  isInitialized: false,
  isLoading: false,
  theme: 'light',
  apiName: 'openWeather',
  error: ''
};

export const appReducer = (state: AppStateType = initialState, action: ActionType): AppStateType => {
  switch (action.type) {
  case 'APP/CHANGE-APP-THEME':
    return { ...state, theme: action.payload };
  case 'APP/SET_INITIALISE':
    return { ...state, isInitialized: action.payload };
  case 'APP/SET_API_NAME':
    return { ...state, apiName: action.payload };
  case 'APP/SET_ERROR':
    return { ...state, error: action.payload };
  default:
    return state;
  }
};
