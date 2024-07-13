import React from "react";
import { Box, Grid } from "@mui/material";
import SearchTool from "./SearchTool";
import SearchResult from "./SearchResult";

const SearchComp = () => {
  const [searchedBooks, setSearchedBooks] = React.useState([]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} md={4} lg={4} xl={4}>
          <Box sx={{ height: "100%" }}>
            <SearchTool updateBooks={(books)=>setSearchedBooks(books)} />
          </Box>
        </Grid>
        <Grid item xs={8} md={8} lg={8} xl={8}>
          <Box sx={{ height: "100%" }}>
            <SearchResult books={searchedBooks} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchComp;
