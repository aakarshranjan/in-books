import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AuthorList from "./AuthorList";
import AuthorDetails from "./AuthorDetails";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AuthorsComp = () => {
  const [authors, setAuthors] = React.useState([]);
  const [selectedAuthor, setSelectedAuthor] = React.useState({});

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3003/authors");
      const data = await res.json();
      setAuthors(data);
      setSelectedAuthor(data[0]);
    }
    fetchData();
  }, []);
  console.log(selectedAuthor);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} md={4} lg={4} xl={4}>
          <Box sx={{ height: "100%" }}>
            <AuthorList
              authors={authors}
              selectedAuthor={selectedAuthor}
              updateSelectedAuthor={(event, author) =>
                setSelectedAuthor(author)
              }
            />
          </Box>
          {/* <Item>xs=6 md=8</Item> */}
        </Grid>
        <Grid item xs={8} md={8} lg={8} xl={8}>
          <Box sx={{ height: "100%" }}>
            <AuthorDetails selectedAuthor={selectedAuthor} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthorsComp;
