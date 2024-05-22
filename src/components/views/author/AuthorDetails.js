import React from "react";
import { Box, Divider } from "@mui/material";
import AuthorInfo from "./AuthorInfo";
import MultiActionAreaCard from "../../generic/Card";

const AuthorDetails = ({ selectedAuthor }) => {
  const [authorBooks, setAuthorBooks] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `http://localhost:3003/books?authorId=${selectedAuthor.id}`
      );
      const data = await res.json();
      console.log("in b", data);
      setAuthorBooks(data);
    }
    fetchData();
  }, [selectedAuthor]);
  console.log(authorBooks);
  return (
    <Box sx={{ height: "90vh", overflowY: "auto" }}>
      <AuthorInfo author={selectedAuthor} />
      <Divider />
      <Box sx={{ paddingTop: "2vh" }}>
        {authorBooks.map((book) => (
          <React.Fragment key={book.id}>
            <MultiActionAreaCard {...book} />
            <Divider variant="inset" />
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default AuthorDetails;
