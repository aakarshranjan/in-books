import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import "./Carousel.css";

const Carousel = () => {
  const [imageList, setImageList] = React.useState([]);
  const [curImgIndex, setCurImgIndex] = React.useState(0);

  // Get image data
  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3003/imageList", {
        method: "GET",
      });
      const data = await res.json();
      console.log(data);
      setImageList(data);
    }
    fetchData();
  }, []);

  // After each 5 seconds, change the image index inorder to show the next image in Carousel
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      handleCurImgIndexChange("INC");
    }, 5000);
    return () => clearTimeout(timeout);
  }, [curImgIndex]);

  const handleCurImgIndexChange = (val) => {
    switch (val) {
      case "INC": {
        setCurImgIndex((prevIndex) => {
          if (prevIndex == imageList.length - 1) return 0;
          else return prevIndex + 1;
        });
        break;
      }
      case "DEC": {
        setCurImgIndex((prevIndex) => {
          if (prevIndex == 0) return imageList.length - 1;
          else return prevIndex - 1;
        });
        break;
      }
    }
  };

  return (
    <Card sx={{ maxWidth: "100vw" }} className="carouse1l">
      {imageList.length > 0 ? (
        <CardActionArea className="carousel__slide">
          <Box style={{ display: "flex" }} className="carousel">
            <KeyboardArrowLeftRoundedIcon
              fontSize="large"
              onClick={() => handleCurImgIndexChange("DEC")}
              sx={{
                position: "absolute",
                top: "180px",
                left: "20px",
                zIndex: 10,
                border: "1px solid black",
                color: "white",
                boxShadow: "2px 2px black",
              }}
            />
            <img
              src={imageList[curImgIndex].imgUrl}
              alt={imageList[curImgIndex].name}
              height="400px"
              style={{
                position: "relative",
                width: "100vw",
                transition: "1s",
              }}
              className="carousel__img"
            />
            <KeyboardArrowRightRoundedIcon
              fontSize="large"
              onClick={() => handleCurImgIndexChange("INC")}
              sx={{
                position: "absolute",
                top: "180px",
                right: "10px",
                border: "1px solid black",
                color: "white",
                boxShadow: "2px 2px black",
              }}
            />
          </Box>
          {/* <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {imageList[curImgIndex].name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {imageList[curImgIndex].description}
                        </Typography>
                    </CardContent> */}
        </CardActionArea>
      ) : (
        <>Loading</>
      )}
    </Card>
  );
};

export default Carousel;
