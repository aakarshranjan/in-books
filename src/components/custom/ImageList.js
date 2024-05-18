import React from "react";
import { Box } from "@mui/material";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import "./ImageList.css";

const ImageList = () => {
  const [authors, setAuthors] = React.useState([]);
  const [curElIndex, setCurElIndex] = React.useState(0);
  const [inc, setInc] = React.useState(true);
  const elRefs = React.useRef([]);
  const ref1 = React.useRef(null);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3003/authors");
      const data = await res.json();
      setAuthors(data);
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    elRefs.current = elRefs.current.slice(0, authors.length);
  }, [authors.length]);

  React.useEffect(() => {
    if (elRefs.current[curElIndex]) {
      ref1.current.scrollBy({
        left: inc
          ? elRefs.current[curElIndex].scrollWidth + 10
          : -elRefs.current[curElIndex].scrollWidth - 10,
        behavior: "smooth",
      });
    }
  }, [curElIndex]);

  console.log(curElIndex);

  return authors.length == 0 ? (
    <h1>Loading</h1>
  ) : (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <KeyboardArrowLeftRoundedIcon
        fontSize="large"
        disabled={curElIndex == 0}
        onClick={() => {
          setInc(false);
          setCurElIndex((prev) => prev - 1);
        }}
        // sx={{
        //   position: "absolute",
        //   top: "180px",
        //   left: "20px",
        //   zIndex: 10,
        //   border: "1px solid black",
        //   color: "white",
        //   boxShadow: "2px 2px black",
        // }}
      />
      <Box className="container" ref={ref1}>
        {authors.map((author, i) => (
          <Box
            style={{
              background: `url(${author.img}) no-repeat 50% / cover`,
            }}
            className="card"
            ref={(el) => (elRefs.current[i] = el)}
          >
            <Box className="content">
              <h2>{author.name}</h2>
              <span>{author.additionalInfo}</span>
            </Box>
          </Box>
        ))}
      </Box>
      <KeyboardArrowRightRoundedIcon
        fontSize="large"
        disabled={curElIndex == authors.length - 1}
        onClick={() => {
          setInc(true);
          setCurElIndex((prev) => prev + 1);
        }} //setCurElIndex((prev) => prev + 1)
        sx={{
          borderRadius: "5vw",
          //   border: "1px solid black",
          //   color: "white",
          //   boxShadow: "2px 2px black",
        }}
      />
    </Box>
  );
};

export default ImageList;
