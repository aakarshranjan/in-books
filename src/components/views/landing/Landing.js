import React from "react";
import { Typography } from "@mui/material";
import Carousel from "../../custom/Carousel";
import SectionCard from "../../custom/SectionCard";
import ImageList from "../../custom/ImageList";

const Landing = () => {
  return (
    <>
      <Carousel />
      <Typography variant="h5">Happy Reading</Typography>
      <SectionCard />
      <ImageList />
    </>
  );
};

export default Landing;
