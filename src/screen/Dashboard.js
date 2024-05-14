import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TrainIcon from '@mui/icons-material/Train';
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    marginLeft: drawerWidth,
  },
}));

function Dashboard() {
  const classes = useStyles();
  const [openCMS, setOpenCMS] = useState(false);

  const handleCMSSubmenuClick = () => {
    setOpenCMS(!openCMS);
  };

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          <ListItem button key="Dashboard">
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button key="CMS" onClick={handleCMSSubmenuClick}>
            <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
            <ListItemText primary="CMS" />
            {openCMS ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={openCMS} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button key="Train">
                <ListItemIcon><TrainIcon /></ListItemIcon>
                <ListItemText primary="Train" />
              </ListItem>
              <ListItem button key="Flight">
                <ListItemIcon><FlightIcon /></ListItemIcon>
                <ListItemText primary="Flight" />
              </ListItem>
              <ListItem button key="Hotel">
                <ListItemIcon><HotelIcon /></ListItemIcon>
                <ListItemText primary="Hotel" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button key="Users">
            <ListItemIcon><PersonAddAltIcon /></ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button key="Settings">
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button key="Account">
            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
            <ListItemText primary="Account" />
          </ListItem>
          <ListItem button key="Subscription">
            <ListItemIcon><AddBoxIcon /></ListItemIcon>
            <ListItemText primary="Subscription" />
          </ListItem>
          <ListItem button key="GenerateCredentials">
            <ListItemIcon><CreditCardIcon /></ListItemIcon>
            <ListItemText primary="Generate Credentials" />
          </ListItem>
        </List>
      </Drawer>
      <div className={classes.content}>
        {/* Center screen content */}
        {/* Render TrainManagement, FlightManagement, HotelManagement components based on user selection */}
      </div>
    </>
  );
}

export default Dashboard;
