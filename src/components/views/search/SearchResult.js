import React from "react";
import { Box, Typography } from "@mui/material";
import MediaControlCard from "../../generic/Card";

const SearchResult = () => {
  return (
    <Box>
      <Typography variant="h5">Showing results ... of ...</Typography>
      <Box sx={{ paddingTop: "2vh" }}>
        {/* {authorBooks.map((book) => (
          <React.Fragment key={book.id}>
            <MediaControlCard {...book} />
            <Divider variant="inset" />
          </React.Fragment>
        ))} */}
      </Box>
    </Box>
  );
};

export default SearchResult;
