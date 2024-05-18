import React from "react";
import { Box, Typography } from "@mui/material";
import Carousel from "../../custom/Carousel";
import SectionCard from "../../custom/SectionCard";
import ImageList from "../../custom/ImageList";
import CustomizedList from "../../generic/List";
import ThumbnailCarousel from "../../custom/ThumbnailCarousel";
import AutoplayCarousel from "../../custom/AutoScroll";
import FolderList from "../../custom/FolderList";

const Landing = () => {
  return (
    <>
      <Carousel />
      <Typography variant="h5">Happy Reading</Typography>
      {/* <SectionCard /> */}
      <Box sx={{ width: "100%", height: "5vh" }} />
      <ImageList />
      <Box sx={{ width: "100%", height: "5vh" }} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <FolderList title="genre" />
        </Box>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <FolderList title="theme" />
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "5vh" }} />
      {/* <ThumbnailCarousel /> */}
      <Box sx={{ width: "100%", height: "5vh" }} />
      <AutoplayCarousel />
      <Box sx={{ width: "100%", height: "5vh" }} />
    </>
  );
};

export default Landing;
