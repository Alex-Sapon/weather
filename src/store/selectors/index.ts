import { RootState } from '@/store';

export const selectAppTheme = (state: RootState) => state.appReducer.theme;
export const selectIsInitialized = (state: RootState) => state.appReducer.isInitialized;
export const selectAppError = (state: RootState) => state.appReducer.error;
