import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MultiSelectUI from "../../generic/MultiSelectItemUI";

const SearchTool = () => {
  const [selectedItems, setSelectedItems] = React.useState({
    author: [],
    category: [],
    genre: [],
    theme: [],
  });

  const [allItems, setAllItems] = React.useState({
    author: [],
    category: [],
    genre: [],
    theme: [],
  });

  //API call for now. But we will get the data from redux later. Calls for these group infos are already happening at other components
  React.useEffect(() => {
    async function getData() {
      const authorRes = await fetch("http://localhost:3003/authors");
      const authorData = await authorRes.json();
      const catrRes = await fetch("http://localhost:3003/category");
      const catData = await catrRes.json();
      const genreRes = await fetch("http://localhost:3003/genre");
      const genreData = await genreRes.json();
      const themeRes = await fetch("http://localhost:3003/theme");
      const themeData = await themeRes.json();

      const tD = themeData.map((d) => {
        return { id: d.id, name: d.name };
      });
      const aD = authorData.map((d) => {
        return { id: d.id, name: d.name };
      });
      const cD = catData.map((d) => {
        return { id: d.id, name: d.name };
      });
      const gD = genreData.map((d) => {
        return { id: d.id, name: d.name };
      });

      setAllItems({
        author: aD,
        category: cD,
        genre: gD,
        theme: tD,
      });
    }
    getData();
  }, []);

  const handleUpdateSelectedItems = (groupName, itemId) => {
    let arr = selectedItems[groupName];
    let newArr;
    if (arr.includes(itemId)) {
      newArr = arr.filter((el) => el != itemId);
    } else {
      newArr = [...arr, itemId];
    }
    setSelectedItems({ ...selectedItems, [groupName]: newArr });
  };

  const handleSelectAllItems = (groupName, isSelectAll) => {
    let arr = allItems[groupName];
    let newArr;
    if (isSelectAll) {
      newArr = arr.map((el) => el.id);
    } else {
      newArr = [];
    }
    setSelectedItems({ ...selectedItems, [groupName]: newArr });
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        height: "90vh",
        overflowY: "auto",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", p: "1vw" }}>
        <Typography variant="h6">Search Filter</Typography>
        <Button variant="outlined" startIcon={<SearchRoundedIcon />}>
          Search
        </Button>
      </Box>
      <Box>
        <MultiSelectUI
          title="Author"
          allItems={allItems["author"]}
          selectedItems={selectedItems["author"]}
          handleUpdateSelectedItems={(itemId) =>
            handleUpdateSelectedItems("author", itemId)
          }
          handleSelectAllItems={(isSelectAll) =>
            handleSelectAllItems("author", isSelectAll)
          }
        />
      </Box>
      <Box>
        <MultiSelectUI
          title="Category"
          allItems={allItems["category"]}
          selectedItems={selectedItems["category"]}
          handleUpdateSelectedItems={(itemId) =>
            handleUpdateSelectedItems("category", itemId)
          }
          handleSelectAllItems={(isSelectAll) =>
            handleSelectAllItems("category", isSelectAll)
          }
        />
      </Box>
      <Box>
        <MultiSelectUI
          title="Genre"
          allItems={allItems["genre"]}
          selectedItems={selectedItems["genre"]}
          handleUpdateSelectedItems={(itemId) =>
            handleUpdateSelectedItems("genre", itemId)
          }
          handleSelectAllItems={(isSelectAll) =>
            handleSelectAllItems("genre", isSelectAll)
          }
        />
      </Box>
      <Box>
        <MultiSelectUI
          title="Theme"
          allItems={allItems["theme"]}
          selectedItems={selectedItems["theme"]}
          handleUpdateSelectedItems={(itemId) =>
            handleUpdateSelectedItems("theme", itemId)
          }
          handleSelectAllItems={(isSelectAll) =>
            handleSelectAllItems("theme", isSelectAll)
          }
        />
      </Box>
    </Box>
  );
};

export default SearchTool;
