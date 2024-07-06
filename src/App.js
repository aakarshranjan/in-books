import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  Box,
  ThemeOptions,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { getUIDesign } from "./utils/theme";
import Landing from "./components/views/landing/Landing";
import Header from "./components/generic/Header";
import AuthorsComp from "./components/views/author";
import SearchComp from "./components/views/search";
import "./App.css";

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
        {/* <Landing /> */}
        {/* <AuthorsComp /> */}
        <SearchComp />
      </Box>
    </ThemeProvider>
  );
};

export default App;
