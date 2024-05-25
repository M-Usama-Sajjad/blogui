import React from 'react'
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Hidden from "@mui/material/Hidden";
import { makeStyles } from '@mui/styles';

const useStyles= makeStyles({
    card:{
        margin:"5px",
        display:'flex'

    },
    
      cardMedia: {
        width: "160px",
      },
   
})

const PostCard = ({post}) => {
    const classes= useStyles();
  return (
<Grid  item xs={12} md={6} className={classes.grid}>
    <CardActionArea  component="a" href='#' >
        <Card className={classes.card} >
            <div className={classes.cardDetails} >
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" style={{ color: "skyblue" }}>
                Continue reading...
              </Typography>
            </CardContent>

            </div>
            <Hidden xsDown>
        <CardMedia
          className={classes.cardMedia}
          image={post.image}
          title={post.imageTitle}
        />
      </Hidden>
        </Card>
    </CardActionArea>

</Grid>
  )
}

export default PostCard