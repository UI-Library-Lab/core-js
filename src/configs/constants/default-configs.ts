export enum paletteModes {
  DARK,
  LIGHT,
}
/* -------------------------------------------------------------------------- */
const paletteConfig = {
  mode: paletteModes.LIGHT,
  black: 'rgb(0, 0, 0)',
  white: 'rgb(255, 255, 255)',
  gray: {
    50: 'rgb(250, 250, 250)',
    100: 'rgb(244, 244, 245)',
    200: 'rgb(228, 228, 231)',
    300: 'rgb(212, 212, 216)',
    400: 'rgb(161, 161, 170)',
    500: 'rgb(113, 113, 122)',
    600: 'rgb(82, 82, 91)',
    700: 'rgb(63, 63, 70)',
    800: 'rgb(39, 39, 42)',
    900: 'rgb(24, 24, 27)',
  },
  primary: {
    25: 'rgb(245, 248, 255)',
    50: 'rgb(235, 241, 255)',
    100: 'rgb(204, 221, 255)',
    200: 'rgb(179, 204, 255)',
    300: 'rgb(133, 173, 255)',
    400: 'rgb(73, 133, 253)',
    500: 'rgb(38, 110, 253)',
    600: 'rgb(5, 74, 235)',
    700: 'rgb(8, 58, 196)',
    800: 'rgb(15, 46, 138)',
    900: 'rgb(15, 33, 87)',
  },
  secondary: {
    50: 'rgb(246, 245, 255)',
    100: 'rgb(234, 230, 255)',
    200: 'rgb(219, 210, 254)',
    300: 'rgb(197, 181, 252)',
    400: 'rgb(161, 128, 249)',
    500: 'rgb(128, 85, 246)',
    600: 'rgb(120, 71, 235)',
    700: 'rgb(112, 55, 225)',
    800: 'rgb(80, 31, 178)',
    900: 'rgb(64, 30, 133)',
  },
  success: {
    50: 'rgb(242, 253, 245)',
    100: 'rgb(222, 252, 233)',
    200: 'rgb(187, 247, 208)',
    300: 'rgb(133, 239, 172)',
    400: 'rgb(74, 222, 128)',
    500: 'rgb(26, 192, 87)',
    600: 'rgb(22, 162, 73)',
    700: 'rgb(21, 127, 60)',
    800: 'rgb(28, 113, 60)',
    900: 'rgb(17, 76, 41)',
  },
  warning: {
    50: 'rgb(254, 252, 231)',
    100: 'rgb(254, 249, 195)',
    200: 'rgb(254, 240, 139)',
    300: 'rgb(253, 223, 73)',
    400: 'rgb(250, 204, 20)',
    500: 'rgb(231, 176, 8)',
    600: 'rgb(200, 138, 4)',
    700: 'rgb(162, 97, 7)',
    800: 'rgb(134, 78, 14)',
    900: 'rgb(115, 63, 18)',
  },
  error: {
    25: 'rgb(255, 250, 250)',
    50: 'rgb(254, 241, 241)',
    100: 'rgb(254, 225, 225)',
    200: 'rgb(254, 200, 200)',
    300: 'rgb(252, 166, 166)',
    400: 'rgb(253, 107, 107)',
    500: 'rgb(239, 67, 67)',
    600: 'rgb(220, 40, 40)',
    700: 'rgb(186, 28, 28)',
    800: 'rgb(152, 27, 27)',
    900: 'rgb(129, 29, 29)',
  },
};
/* ------------------------------- Typography ------------------------------- */
const typographyConfig = {
  fontFamily: "'Inter', sans-serif;",
  letterSpacing: '-0.02rem',
  fontWight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fontSize: {
    text: {
      xs: {
        lineHeight: '1.125rem',
        size: '0.75rem',
      },
      sm: {
        lineHeight: '1.25rem',
        size: '0.875rem',
      },
      md: {
        lineHeight: '1.5rem',
        size: '1rem',
      },
      lg: {
        lineHeight: '1.75rem',
        size: '1.125rem',
      },
      xl: {
        lineHeight: '2rem',
        size: '1.25rem',
      },
    },
    display: {
      xs: {
        lineHeight: '2rem',
        size: '1.125rem',
      },
      sm: {
        lineHeight: '2.375rem',
        size: '1.875rem',
      },
      md: {
        lineHeight: '2.75rem',
        size: '2.25rem',
      },
      lg: {
        lineHeight: '3.75rem',
        size: '3rem',
      },
      xl: {
        lineHeight: '4.5rem',
        size: '3.75rem',
      },
      '2xl': {
        lineHeight: '5.625rem',
        size: '4.5rem',
      },
    },
  },
};
/* --------------------------------- Shadow --------------------------------- */
const shadowConfig = {
  xs: '0px 1px 3px',
  sm: '0px 1px 4px',
  md: '0px 4px 8px -1px, 0px 2px 4px -2px',
  lg: '0px 12px 16px -4px, 0px 4px 8px -3px',
  xl: '0px 20px 24px -4px, 0px 8px 10px -2px',
  '3xl': '0px 28px 60px -14px',
  '2xl': '0px 26px 50px -14px',
};
/* ---------------------------------- Blur ---------------------------------- */
const blurConfig = {
  sm: '2px',
  md: '4px',
  lg: '6px',
  xl: '10px',
};
/* --------------------------------- Spacing -------------------------------- */
const spacingConfg = {
  0: '0',
  px: '1px',
  0.5: '0.125rem',
  1: '0.25rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  4: '1rem',
  4.5: '1.125rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  18: '4.5rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  34: '8.375rem',
  36: '9rem',
  38: '9.75rem',
  40: '10rem',
  48: '12rem',
  56: '14rem',
  64: '16rem',
};
/* ------------------------------- BreakPoints ------------------------------ */
const breakPoints = {
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};
/* ------------------------------- Main Config ------------------------------ */
/**
 * base default configs constants based on the UI Design
 */
export const defaultConfigs = {
  /* -------------------------------- palettes -------------------------------- */
  palette: paletteConfig,
  /* ------------------------------- typography ------------------------------- */
  typography: typographyConfig,
  /* --------------------------------- shadows -------------------------------- */
  shadows: shadowConfig,
  /* ---------------------------------- blurs --------------------------------- */
  blur: blurConfig,
  /* --------------------------------- Spacing -------------------------------- */
  spacing: spacingConfg,
  /* ------------------------------- BreakPoint ------------------------------- */
  breakpoints: breakPoints,
};
