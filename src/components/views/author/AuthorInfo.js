import React from "react";
import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const AuthorInfo = ({ author }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "left",
        alignItems: "start",
        px: "1vw",
        py: "2vh",
      }}
    >
      <Box>
        <Avatar
          alt={author.name}
          src={author.img}
          sx={{ width: "15vw", height: "40vh" }}
          variant="rounded"
        />
      </Box>
      <Box sx={{ paddingLeft: "2vw" }}>
        <Typography variant="h6" gutterBottom>
          {author.additionalInfo}
        </Typography>
      </Box>
    </Box>
  );
};

export default AuthorInfo;
