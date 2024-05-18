import React from "react";
import { Box, Typography } from "@mui/material";
import MultiActionAreaCard from "../generic/Card";

const SectionCard = () => {
  const [dataList, setDataList] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3003/genre");
      const data = await res.json();
      setDataList(data);
    }
    fetchData();
  }, []);

  return dataList.length == 0 ? (
    <Typography variant="h6">Loading</Typography>
  ) : (
    <>
      <Typography variant="h6">Genre</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {dataList.map((list) => (
          <Box sx={{ px: "1vw" }}>
            <MultiActionAreaCard />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default SectionCard;
