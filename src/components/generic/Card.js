import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
// import { useSelector, useDispatch } from "react-redux";

export default function MediaControlCard({
  name,
  imgUrl,
  id,
  description,
  author,
  category,
  genre,
  theme: bookTheme,
}) {
  const theme = useTheme();

  //get RTK's search result through reducer
  // const count = useSelector(
  //   (state) => state.searchApi.queries['getValueByParams("books?authorId=1")']
  // );
  // console.log(count);

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: "10vw", height: "10vw", objectFit: "contain" }}
        image={imgUrl}
        alt={name}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {author.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            {description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
