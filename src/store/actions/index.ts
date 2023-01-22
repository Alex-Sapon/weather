export const changeTheme = (value: string) => ({
  type: 'CHANGE-APP-THEME',
  payload: value ,
} as const);
