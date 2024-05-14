import { ThemeOptions, createTheme, responsiveFontSizes } from "@mui/material";
import { darken, lighten } from "@mui/material/styles";

export const getBackgroundColor = (color, mode)=>
  mode == "dark" ? darken(color, 0.2) : lighten(color, 0.2);

export const getHoverBackgroundColor = (color, mode) =>
  mode == "dark" ? darken(color, 0.1) : lighten(color, 0.1);

export const pxToRem = (px) => `${px / 22.5}rem`;

export const pxToVh = (px) => `${px * 0.09259}vh`;

export const pxToVw = (px) => `${px * 0.05208}vw`;

export const vhToPx = (vh) => `${vh / 0.09259}px`;

export const theme = responsiveFontSizes(
  createTheme({
    drawer: {
      drawerClose: {
        xl: "3vw",
        lg: "4.5vw",
        md: "5.2vw",
        sm: "5.9vw",
        xs: "10.2vw",
      },
      drawerOpen: {
        xl: "8vw",
        lg: "11vw",
        md: "13vw",
        sm: "18vw",
        xs: "25vw",
      },
    },
    components: {
      // MuiTypography: {
      //   styleOverrides: {
      //     root: ({ theme }) =>
      //       theme.unstable_sx({
      //         color: "white",
      //       }),
      //   },
      // },
      MuiTab: {
        styleOverrides: {
          root: ({ theme }) =>
            theme.unstable_sx({
              color: "white",
            }),
        },
      },
      MuiButtonBase: {
        defaultProps: {
            disableRipple: true,
        },
      },
    },
  })
);
