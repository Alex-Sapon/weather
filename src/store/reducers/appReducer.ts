import { changeTheme, setCoordinates, setInitialize } from '@/store/actions';

const initialState: StateType = {
  isInitialized: false,
  theme: 'light',
  latitude: null,
  longitude: null,
};

export const appReducer = (state: StateType = initialState, action: ActionType) => {
  switch (action.type) {
  case 'APP/CHANGE-APP-THEME':
    return { ...state, theme: action.payload };
  case 'APP/SET_INITIALISE':
    return { ...state, isInitialized: action.payload };
  default:
    return state;
  }
};

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
