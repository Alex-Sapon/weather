import { ActionType, AppStateType } from '@/store/types';
import { loadState } from '@/utils/localStorage';

const cache = loadState()?.appReducer;

const initialState: AppStateType = {
  isInitialized: false,
  isLoading: false,
  theme: cache?.theme || 'light',
  apiName: cache?.apiName || 'openWeather',
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
