import React from 'react'
import {Card,CardContent,Typography,CardActions,Button} from '@mui/material';
import { makeStyles } from '@mui/styles';
import backgroundImage from  '../images/fabrice-villard-Jrl_UQcZqOc-unsplash.jpg'


const useStyles = makeStyles({
    cover: {
      backgroundImage: `url(https://images.unsplash.com/photo-1615469038804-6b91aef7026f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max)`,
      backgroundPosition: "center",
      padding: "35px 25px",
    },
    title: {
      fontSize: 40,
      fontFamily: "Montserrat",
    },
    textContainer: {
      color: "white",
    },
  });
const FeaturedPost = () => {
    const classes= useStyles()
  return (
    <>
    <Card className={classes.cover}>
        <CardContent className={classes.textContainer}> 
            <Typography className={classes.title} gutterBottom>
              Title of a longer featured blog post
            </Typography>
            <Typography variant="h5">
            Mutiple lines of the text that form the ledes,
            information regarding the quickly and efficiently
            about what most intresting in the post's 
            contents
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant='text' className={classes.btn} >
             Read more---
            </Button>
        </CardActions>

    </Card>
    </>
  )
}

export default FeaturedPost