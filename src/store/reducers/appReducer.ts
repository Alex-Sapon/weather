import { changeTheme, setAppError, setInitialize } from '@/store/actions';

const initialState: StateType = {
  isInitialized: false,
  theme: 'light',
  error: ''
};

export const appReducer = (state: StateType = initialState, action: ActionType): StateType => {
  switch (action.type) {
  case 'APP/CHANGE-APP-THEME':
    return { ...state, theme: action.payload };
  case 'APP/SET_INITIALISE':
    return { ...state, isInitialized: action.payload };
  case 'APP/SET_ERROR':
    return { ...state, error: action.payload };
  default:
    return state;
  }
};

type StateType = {
  isInitialized: boolean
  theme: string
  error: string
};

type ActionType =
  | ReturnType<typeof changeTheme>
  | ReturnType<typeof setInitialize>
  | ReturnType<typeof setAppError>;
