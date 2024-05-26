import React from "react";
import {
  Box,
  Checkbox,
  Collapse,
  FormControlLabel,
  InputAdornment,
  TextField,
} from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

// const useStyles = makeStyles((theme) => ({
//   treeStyle: {
//     padding: "2.1px",
//     textAlign: "left",
//     fontSize: "17px",
//     marginBottom: "1px",
//   },
//   treeStyle2: {
//     padding: "2.1px",
//     marginBottom: "12px",
//     textAlign: "left",
//     fontSize: "17px",
//     paddingBottom: "0px",
//   },
//   treeHeaderStyle: {
//     cursor: "pointer",
//     display: "flex",
//     height: "19px",
//     width: "fit-content",
//   },
//   treeHeaderStyle2: {
//     cursor: "pointer",
//     display: "flex",
//     height: "19px",
//     width: "fit-content",
//   },
//   headerFont: {
//     color: theme.hrcOrange,
//     fontSize: "14px",
//     fontWeight: "600",
//   },
//   treeBodyStyle: {
//     marginLeft: "11.5px",
//     width: "100%",
//     display: "flex",
//     overflow: "hidden",
//   },
//   divider: {
//     borderLeft: "1px dashed",
//     marginBottom: "6px",
//     marginTop: "5px",
//   },
// }));

const MultiSelectUI = ({
  title,
  allItems = [],
  selectedItems,
  handleUpdateSelectedItems,
  handleSelectAllItems,
}) => {
  const [isListOpen, setIsListOpen] = React.useState(true);
  const [searchVal, setSearchVal] = React.useState(allItems);
  const [searchText, setSearchText] = React.useState(allItems);

  React.useEffect(() => {
    setSearchVal(allItems);
  }, [allItems]);

  const handleSearchTextChange = (val) => {
    let res = allItems.filter(({ id, name }) =>
      name.toLowerCase().startsWith(val.toLowerCase())
    );
    setSearchText(val);
    setSearchVal(res);
  };

  return (
    <div
      style={
        isListOpen
          ? {
              padding: "2.1px",
              marginBottom: "12px",
              textAlign: "left",
              fontSize: "17px",
              paddingBottom: "0px",
            }
          : {
              padding: "2.1px",
              textAlign: "left",
              fontSize: "17px",
              marginBottom: "1px",
            }
      }
      elevation={isListOpen ? 3 : 1}
    >
      <div
        style={
          isListOpen
            ? {
                cursor: "pointer",
                display: "flex",
                alignItems: "end",
                width: "fit-content",
              }
            : {
                cursor: "pointer",
                alignItems: "end",
                display: "flex",
                width: "fit-content",
              }
        }
        onClick={() => {
          setIsListOpen(!isListOpen);
        }}
      >
        <ExpandMoreRoundedIcon
          className={isListOpen ? "rotate" : "rotateBack"}
          style={{ height: "auto", weight: "auto", color: "#ff7c00" }}
        />
        <Checkbox
          checked={
            allItems.filter((it) => selectedItems.includes(it.id)).length ==
            allItems.length
          }
          onChange={(e) => handleSelectAllItems(e.target.checked)}
          onClick={(e) => e.stopPropagation()}
          sx={{ padding: 0 }}
        />

        {/* <div className={classes.headerFont}>Author</div> */}
        <div>{title}</div>
        <TextField
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => handleSearchTextChange(e.target.value)}
          value={searchText}
          id="standard-basic"
          variant="standard"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <ClearRoundedIcon onClick={() => handleSearchTextChange("")} />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <Collapse in={isListOpen}>
        <div
          style={{
            marginLeft: "11.5px",
            width: "100%",
            display: "grid",
            borderLeft: "1px dashed",
            marginBottom: "6px",
            marginTop: "5px",
            maxHeight: "30vh",
            overflowY: "auto",
          }}
        >
          {searchVal.map((item) => (
            <FormControlLabel
              key={item.id}
              control={
                <Checkbox
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleUpdateSelectedItems(item.id)}
                />
              }
              label={item.name}
            />
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default MultiSelectUI;
