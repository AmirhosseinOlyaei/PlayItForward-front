import styles from "./ListingDetail.module.css";
import { Button, ButtonGroup, Typography, Box, Divider } from '@mui/material';
import { Input } from '@mui/material';
import { TextField } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InBoxIcon from '@mui/icons-material/MoveToInBox';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';


const drawerWidth = 340;

const ListingDetail = () => {
  const toyLising = {
    user_id: 1,
    given_to_user_id: 2,
    title: "Little Lego cars",
    description: "5 items, multiple colors, size about 2 inches  each, lego original",
    condition: "Like new",
    delivery_method: ["Pickup", "Dropoff"], 
    pictures: "https://geekculture.co/wp-content/uploads/2020/05/tigermiyaw-8-1200x817.jpg",
    category: "Cars",
    zip_code: 94040,
   
    created_by_id: 1,
    create_date: "2024-11-03", 
    modified_date: "2024-11-03",
    modified_by_id: 1,
  };
  const toyGiver = {
    email: "jH0H0@example.com",
    first_name: "Jen",
    last_name: "Hill",
    profile_picture: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    nickname: "Jennickname",
    zipcode: 94040,
    created_by_id: 1,
    create_date: "March 2022",
    modified_date: "March 2022",
    modified_by_id: 1,

  };
  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, BoxSizing: 'border-Box', marginTop: "64px" },
        }}
      >
        
        <Box sx={{ overflow: 'auto', padding: "0px 20px" }}>
          
            <Box sx={{ padding: "20px 0" }}>
            <Typography variant="h4" sx={{ margin: "5px 0" }}>{toyLising.title}</Typography>
            <Typography variant="body2">Listed {toyLising.create_date} in {toyLising.zip_code} </Typography>
            <Typography variant="body2"><span>{toyLising.delivery_method[0]}, {toyLising.delivery_method[1]}</span></Typography>
            <Grid xs={12} sx={{ margin: "10px 0", display: "flex", justifyContent: "space-between" }}>
              <Button variant="contained">Message</Button>
              <Button variant="contained">Favorites</Button>
              <Button variant="contained">Share</Button>
            </Grid>
            </Box>
            <Divider/>
            <Box sx={{ padding: "20px 0" }}>
              <Typography variant="h6" sx={{ margin: "5px 0" }}>Details</Typography>
                <div className={styles.detailsRow}>
                  <div className={styles.detailsLabel}><Typography variant="body2"><b>Category</b></Typography></div>
                  <div><Typography variant="body2">{toyLising.category}</Typography></div>
                </div>
                <div className={styles.detailsRow}>
                  <div className={styles.detailsLabel}><Typography variant="body2"><b>Condition</b></Typography></div>
                  <div><Typography variant="body2">{toyLising.condition}</Typography></div>
                </div>
                <div className={styles.detailsRow}>
                  <div className={styles.detailsLabel}><Typography variant="body1"><b>Description</b></Typography></div>  
                  <div><Typography variant="body2">{toyLising.description}</Typography></div>
                </div>
            </Box>
            <Divider/>
            <Box sx={{ padding: "20px 0" }}>
              <Typography variant="h6" sx={{ margin: "5px 0" }}>Toy giver information</Typography>
                <div className={styles.giverInformation}>
                  <img src={toyGiver.profile_picture} alt="Toy giver profile picture" width="42px" height="42px" />
                  <Typography variant="body2" sx={{ marginLeft: "10px", lineHeight: "42px" }}>{toyGiver.nickname}</Typography>
                </div>
                <Typography variant="body2">Joined <b>PlayItForward</b> in {toyGiver.create_date}</Typography>
            </Box>
            <Divider/>
            <Box sx={{ padding: "20px 0" }}>
              <Typography variant="h6" sx={{ margin: "5px 0" }}>Send a message</Typography>
              <TextField id="outlined-basic" label="Is this still available?" variant="outlined" sx={{ width: "100%" }} />
              <br/>
              <Button variant="contained" sx={{ width: "100%", marginTop: "10px" }}>Send</Button>
            </Box>
          
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <img src={toyLising.pictures} alt="Toy image" width="100%" />
      </Box>
    </Box>


  );
};

export default ListingDetail;
