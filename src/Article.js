import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const styles = {
  card: {
    maxWidth: "100%",
  },

  media: {
    height: 240,
  },
  cardAction: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  }
};

function Article({cardPicture, personPicture, titleArticle, namePerson, dateSet, descriptionContent}) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={styles.card}>
        <CardMedia
          sx={styles.media}
          component="img"
          image={cardPicture}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {titleArticle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descriptionContent}
          </Typography>
        </CardContent>
        <CardActions sx={styles.cardAction}>
          <Box sx={styles.author}>
            <Avatar src={personPicture} />
            <Box ml={2}>
              <Typography variant="subtitle2" component="p">
                {namePerson}
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="p"
              >
               {dateSet}
              </Typography>
            </Box>
          </Box>
          <Box>
            <BookmarkIcon />
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Article;
