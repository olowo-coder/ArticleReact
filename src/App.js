import "./App.css";
import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Article from "./Article";
import Header from "./Header";
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
  const [open, setOpen] = React.useState(false);
  const handleModal = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
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
          <Article
            titleArticle={"React Test"}
            namePerson={"Jake Brandon"}
            cardPicture={"https://picsum.photos/id/1/200/300"}
            personPicture={
              "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            dateSet={"May 14, 2022"}
            descriptionContent={
              "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
          />
          <Article
            titleArticle={"Angular Test"}
            namePerson={"Sarah John"}
            cardPicture={"https://picsum.photos/id/10/200/300"}
            personPicture={
              "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            dateSet={"May 14, 2022"}
            descriptionContent={
              "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
          />

          <Article
            titleArticle={"Vue Test"}
            namePerson={"Blake Utimir"}
            cardPicture={"https://picsum.photos/id/1011/200/300"}
            personPicture={
              "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            dateSet={"Jan 10, 2022"}
            descriptionContent={
              "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
          />

          <Article
            titleArticle={"Spring Test"}
            namePerson={"Simpson Blue"}
            cardPicture={"https://picsum.photos/id/1015/200/300"}
            personPicture={
              "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            dateSet={"April 11, 2020"}
            descriptionContent={
              "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
          />

          <Article
            titleArticle={"Java Test"}
            namePerson={"Charles Randon"}
            cardPicture={"https://picsum.photos/id/1027/200/300"}
            personPicture={
              "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            dateSet={"Nov 09, 2019"}
            descriptionContent={
              "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
          />

          <Article
            titleArticle={"Python Test"}
            namePerson={"Bob Bradley"}
            cardPicture={"https://picsum.photos/id/1029/200/300"}
            personPicture={
              "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            dateSet={"Feb 23, 2021"}
            descriptionContent={
              "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
          />

          <Article
            titleArticle={"Football Test"}
            namePerson={"Sam Jackson"}
            cardPicture={"https://picsum.photos/id/1074/200/300"}
            personPicture={
              "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            dateSet={"Mar 14, 2010"}
            descriptionContent={
              "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
          />

          <Article
            titleArticle={"TOp up Test"}
            namePerson={"Messi Cake"}
            cardPicture={"https://picsum.photos/seed/picsum/200/300"}
            personPicture={
              "https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            dateSet={"May 21, 2023"}
            descriptionContent={
              "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
          />
        </Grid>
        <Box my={4} sx={styles.paginationContainer}>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Box>
      </Container>
    </div>
  );
}

export default App;
