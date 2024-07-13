import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import MediaControlCard from "../../generic/Card";

const SearchResult = ({ books }) => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        height: "90vh",
        overflowY: "auto",
      }}
    >
      <Typography variant="h5">Showing results ... of ...</Typography>
      <Box sx={{ paddingTop: "2vh" }}>
        {books?.map((book) => (
          <React.Fragment key={book.id}>
            <MediaControlCard {...book} />
            <Divider variant="inset" />
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default SearchResult;
