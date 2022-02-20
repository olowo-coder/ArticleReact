import "./App.css";
import React, { useState, useEffect} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Header from "./Header";
import Articles from "./Articles";
import Popup from "./Popup";

const styles = {
  blogContainer: {
    paddingTop: "10px",
  },

  blogTitle: {
    fontWeight: 800,
    paddingBottom: "10px",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
};

function App(props) {
  // const { classes } = props;
  const baseUrl = "http://localhost:7080/article"
  const [open, setOpen] = useState(false);
  const handleModal = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [articles, setArticles] = useState([]);

  useEffect( () => {
    const articlesFromServer  = async () => { 
      const art = await getArticles()
      setArticles(art)
    }
    articlesFromServer();
  }, [])
  
  const getArticles = async () => {
    const res = await fetch(`${baseUrl}/all`);
    const data = await res.json();
    console.log(data);
    return data;
  }

  return (
    <div>
      <Header />
      <Container maxWidth="lg" sx={styles.blogContainer}>
        <Typography variant="h4" sx={styles.blogTitle}>
        <Box my={4} sx={styles.paginationContainer}>
          <Popup toggler={open} handleClose={handleClose}></Popup>
        <Button onClick={handleModal} variant="contained">Articles</Button>
        </Box>
        </Typography>
        <Grid container spacing={3}>
          <Articles articlesAll={articles} />
        </Grid>
        <Box my={4} sx={styles.paginationContainer}>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Box>
      </Container>
    </div>
  );
}

export default App;
