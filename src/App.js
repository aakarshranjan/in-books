import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  Box,
  ThemeOptions,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import Landing from "./components/views/landing/Landing";
import Header from "./components/generic/Header";
import { getUIDesign } from "./utils/theme";

const App = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const theme = React.useMemo(
    () => responsiveFontSizes(createTheme(getUIDesign(isDarkMode))),
    [isDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Header
        mode={isDarkMode}
        updateMode={(e) => setIsDarkMode(e.target.checked)}
      />
      <Box>
        <Landing />
      </Box>
    </ThemeProvider>
  );
};

export default App;
