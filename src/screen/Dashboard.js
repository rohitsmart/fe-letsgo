import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DashboardIcon from '@mui/icons-material/Dashboard';

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

function Dashboard({ role = 'admin' }) {
  const classes = useStyles();

  const renderAdminOptions = () => {
    return (
      <>
        <ListItem button key="CMS">
          <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
          <ListItemText primary="CMS" />
        </ListItem>
        <ListItem button key="Users">
          <ListItemIcon><PersonAddAltIcon /></ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
      </>
    );
  };

  const renderAgentOptions = () => {
    return (
      <>
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
      </>
    );
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
          {role === 'admin' && renderAdminOptions()}
        {role === 'agent' && renderAgentOptions()}
        </List>
      </Drawer>
      <div className={classes.content}>
        {/* Place the content below the navbar */}
        {/* Your content goes here */}
      </div>
    </>
  );
}

export default Dashboard;
