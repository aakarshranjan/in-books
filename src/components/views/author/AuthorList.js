import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function AuthorList({
  authors = [],
  selectedAuthor = {},
  updateSelectedAuthor,
}) {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        height: "90vh",
        overflowY: "auto",
      }}
    >
      {authors.map((author) => (
        <React.Fragment key={author.id}>
          <ListItemButton
            alignItems="flex-start"
            selected={selectedAuthor.id == author.id}
            onClick={(e) => updateSelectedAuthor(e, author)}
          >
            <ListItemAvatar>
              <Avatar alt={author.name} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={author.name}
              secondary={
                <React.Fragment>
                  {author.additionalInfo.slice(0, 50)} ...
                </React.Fragment>
              }
            />
          </ListItemButton>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
}
