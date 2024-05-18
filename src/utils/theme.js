import { darken, lighten } from "@mui/material/styles";

export const getBackgroundColor = (color, mode) =>
  mode == "dark" ? darken(color, 0.2) : lighten(color, 0.2);

export const getHoverBackgroundColor = (color, mode) =>
  mode == "dark" ? darken(color, 0.1) : lighten(color, 0.1);

export const pxToRem = (px) => `${px / 22.5}rem`;

export const pxToVh = (px) => `${px * 0.09259}vh`;

export const pxToVw = (px) => `${px * 0.05208}vw`;

export const vhToPx = (vh) => `${vh / 0.09259}px`;

export const getUIDesign = (mode) => ({
  palette: {
    mode: mode ? "dark" : "light",
    primary: {
      light: mode ? "#757ce8" : "#4b5bad",
      main: mode ? "#3f50b5" : "#4b5bad",
      dark: mode ? "#002884" : "#4b5bad",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    background: {
      paper: mode ? "#2e3a5c" : "#ffe396",
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
});
