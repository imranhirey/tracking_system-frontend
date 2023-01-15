import {Divider, Grid, Typography} from "@mui/material";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import Searchtrackings from "./Searchtrackings";
const Trackinglist = () => {
  return (
    <Grid container direction="row"  spacing={2} width="100%" height="100%">
       
      <Grid marginTop={6} item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Searchtrackings/>
      <Typography>
            Recent Tracking List
        </Typography>
        <Divider
            sx={{ my: 2 }}
            
        />
      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
    >
      <ListItem style={{
        backgroundColor: "#0b081c",
        color: "#fff",
        borderRadius: "10px",
        marginBottom: "10px",
      }} disablePadding>
        <ListItemButton>
         
          <ListItemText primary="Geedi sahan web app" />
          
        </ListItemButton>
      </ListItem>
      <ListItem style={{
        backgroundColor: "#0f2117",
        color: "#fff",
        borderRadius: "10px",
        marginBottom: "10px",
      }} disablePadding>
        <ListItemButton>
         
          <ListItemText primary="Geedi sahan web app" />
          
        </ListItemButton>
      </ListItem><ListItem style={{
        backgroundColor: "#090d17",
        color: "#fff",
        borderRadius: "10px",
        marginBottom: "10px",
      }} disablePadding>
        <ListItemButton>
         
          <ListItemText primary="Geedi sahan web app" />
          
        </ListItemButton>
      </ListItem>
     
    </List>

        </Grid>
    </Grid>
  );
};

export default Trackinglist;
