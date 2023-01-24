import { RootState } from '@/store';

export const selectAppTheme = (state: RootState) => state.appReducer.theme;
