import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { Divider } from "@mui/material";

export default function FolderList({ title }) {
  const [dataList, setDataList] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:3003/${title}`);
      const data = await res.json();
      setDataList(data);
    }
    fetchData();
  }, []);

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "35vw",
        bgcolor: "background.paper",
        maxHeight: "50vh",
        overflowY: "scroll",
      }}
    >
      {dataList.map((data) => (
        <>
          <ListItem>
            <ListItemAvatar>
              {/* <Avatar> */}
              <img src={data.img} height="50px" width="50px" color="white" />
              {/* </Avatar> */}
            </ListItemAvatar>
            <ListItemText
              primary={data.name}
              secondary="Jan 9, 2014"
              primaryTypographyProps={{ color: "primary.light" }}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      ))}
    </List>
  );
}
