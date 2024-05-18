import React from "react";
import "./AutoScroll.css";
import { Box } from "@mui/material";

export default function AutoplayCarousel() {
  const [dataList, setDataList] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3003/category");
      const data = await res.json();
      setDataList(data);
    }
    fetchData();
  }, []);
  console.log(dataList);
  return (
    <Box className="carousel-container">
      <Box className="carousel-track">
        {dataList.map((card) => (
          <Box key={card.id} className="carousel-card">
            <img src={card.img} alt={card.name}></img>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
