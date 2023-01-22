import { AppStateType } from '@/store';

export const selectAppTheme = (state: AppStateType) => state.appReducer.theme;