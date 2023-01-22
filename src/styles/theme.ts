// ----- color palette -----
const color = {
  white: '#ffffff',
  blackDark: '#000000',
  blackLight: '#2E3035',
  greyDark: '#4F4F4F',
  greyLight: '#939CB0',
  blueDark: '#4793FF33',
  blueLight: '#4793FF',
};

// ----- height -----


// ----- width -----


// ----- padding -----


// ----- margin -----


// ----- position -----


// ----- grid-column -----


// ----- grid-row -----


// ----- gap -----


// ----- border -----


// ----- radius -----


// ----- boxShadow -----
export const boxShadow = {
  light: '2px 5px 25px -3px rgba(180, 180, 180, 0.25)',
  dark: '2px 5px 25px -3px rgba(180, 180, 180, 0.25)',
};

// ----- animation -----


// ----- fontSize -----


const lightTheme = {
  color: {
    backgroundPrimary: color.white,
    backgroundSecondary: color.white,
    backgroundTertiary: color.blueDark,
    textPrimary: color.blackDark,
    textSecondary: color.blackLight,
    textTertiary: color.blueLight,
    border: color.greyLight,
  },
  boxShadow: boxShadow.light,
};

const darkTheme = {
  color: {
    backgroundPrimary: color.blackDark,
    backgroundSecondary: color.greyDark,
    backgroundTertiary: color.blackLight,
    textPrimary: color.white,
    textSecondary: color.greyLight,
    textTertiary: color.blueLight,
    border: color.greyLight,
  },
  boxShadow: boxShadow.dark,
};

export const theme: {[key: string]: any} = {
  light: lightTheme,
  dark: darkTheme,
};
