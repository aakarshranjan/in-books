import React from "react";
import { Box, Grid } from "@mui/material";
import SearchTool from "./SearchTool";
import SearchResult from "./SearchResult";

const SearchComp = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} md={4} lg={4} xl={4}>
          <Box sx={{ height: "100%" }}>
            <SearchTool />
          </Box>
        </Grid>
        <Grid item xs={8} md={8} lg={8} xl={8}>
          <Box sx={{ height: "100%" }}>
            <SearchResult />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchComp;
