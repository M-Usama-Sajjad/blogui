// import React from 'react';
// import { Box, CssBaseline, Grid } from '@mui/material';
// import Sidebar from './components/Sidebar';
// import ChatArea from './components/ChatArea';
// import SettingsPanel from './components/SettingsPanel';

// const App = () => {
//   return (
//     <Box sx={{ display: 'flex', height: '100vh' }}>
//       <CssBaseline />
//       <Grid container>
//         <Grid item xs={3}>
//           <Sidebar />
//         </Grid>
//         <Grid item xs={6}>
//           <ChatArea />
//         </Grid>
//         <Grid item xs={3}>
//           <SettingsPanel />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default App;

// import React from "react";

// const App = () => {
//   return (
//     <>
//       <div>
//         <div className="message">
//           hi how r you my dear
//           <p className="timestamp"> 9:34</p>
//         </div>
//       </div>
//       <div>

//      <div> hi</div>
//      <div>hi </div>

//       </div>
//     </>
//   );
// };

// export default App;
import React from "react";
import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import FeaturedPost from "./components/FeaturedPost";
import { Container, Grid,Toolbar ,Stack} from "@mui/material";
import { featuredPosts } from "./data/Data";
import PostCard from "./components/PostCard";
import { makeStyles } from "@mui/styles";
import Main from "./components/Main";
import Sidebar from './components/Sidebar'
import { sidebar } from "./data/Data";
import Footer from './components/Footer'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
  },
}));
const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const classes = useStyles()

  return (
    <>
      <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid} style={{marginTop:"20px"}}>
          <Main title="From the firehose" />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      
      </Container>
      <Footer   title="Footer"
        description="Something here to give the footer a purpose!"></Footer>
      </ThemeProvider>
      
      
    </>
  );
};

export default App;
