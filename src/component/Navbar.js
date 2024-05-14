// import React, { useState } from 'react';
// import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Hidden } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import TrainIcon from '@mui/icons-material/Train';
// import FlightIcon from '@mui/icons-material/Flight';
// import HotelIcon from '@mui/icons-material/Hotel';
// import SettingsIcon from '@mui/icons-material/Settings';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
// import { useTheme } from '@mui/material/styles';

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(null);
//   const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
//   const theme = useTheme();

//   const handleMenuOpen = (event) => {
//     setMenuOpen(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setMenuOpen(null);
//   };

//   const handleServicesMenuOpen = () => {
//     setServicesMenuOpen(!servicesMenuOpen);
//   };

//   const handleServicesMenuClose = () => {
//     setServicesMenuOpen(false);
//   };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: theme.palette.secondary.main }}>
//           LetsGO
//         </Typography>
//         <Hidden smDown>
//           <Button color="inherit" onClick={() => console.log("Home")} sx={{ color: theme.palette.secondary.main }}>Home</Button>
//           <Button color="inherit" onClick={handleServicesMenuOpen} sx={{ color: theme.palette.secondary.main }}>
//             Services
//             {servicesMenuOpen && (
//               <Menu
//                 anchorEl={document.getElementById("services-menu")}
//                 open={servicesMenuOpen}
//                 onClose={handleServicesMenuClose}
//                 MenuListProps={{ onMouseLeave: handleServicesMenuClose }}
//               >
//                 <MenuItem onClick={handleMenuClose}>
//                   <ListItemIcon>
//                     <TrainIcon fontSize="small" sx={{ color: theme.palette.secondary.main }} />
//                   </ListItemIcon>
//                   <ListItemText primary="Train Reservation" />
//                 </MenuItem>
//                 <MenuItem onClick={handleMenuClose}>
//                   <ListItemIcon>
//                     <FlightIcon fontSize="small" sx={{ color: theme.palette.secondary.main }} />
//                   </ListItemIcon>
//                   <ListItemText primary="Flight Reservation" />
//                 </MenuItem>
//                 <MenuItem onClick={handleMenuClose}>
//                   <ListItemIcon>
//                     <HotelIcon fontSize="small" sx={{ color: theme.palette.secondary.main }} />
//                   </ListItemIcon>
//                   <ListItemText primary="Hotel Reservation" />
//                 </MenuItem>
//               </Menu>
//             )}
//           </Button>
//           <Button color="inherit" onClick={() => console.log("Help")} sx={{ color: theme.palette.secondary.main }}>Help</Button>
//           <Button color="inherit" onClick={() => console.log("About")} sx={{ color: theme.palette.secondary.main }}>About</Button>
//           <Button color="inherit" onClick={() => console.log("Login")} sx={{ color: theme.palette.secondary.main }}>Login</Button>

//         </Hidden>
//         <IconButton
//           size="large"
//           edge="end"
//           color="inherit"
//           aria-label="menu"
//           onClick={handleMenuOpen}
//           sx={{ display: { xs: 'block', md: 'none' } }}
//         >
//           <MenuIcon sx={{ color: theme.palette.secondary.main }} />
//         </IconButton>
//         <Menu
//           anchorEl={menuOpen}
//           open={Boolean(menuOpen)}
//           onClose={handleMenuClose}
//           anchorOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//           transformOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//         >
//           <MenuItem onClick={handleMenuClose}>
//             <ListItemIcon>
//               <SettingsIcon fontSize="small" sx={{ color: theme.palette.secondary.main }} />
//             </ListItemIcon>
//             <ListItemText primary="CMS Updates" />
//           </MenuItem>
//           <MenuItem onClick={handleMenuClose}>
//             <ListItemIcon>
//               <AccountCircleIcon fontSize="small" sx={{ color: theme.palette.secondary.main }} />
//             </ListItemIcon>
//             <ListItemText primary="Client Login" />
//           </MenuItem>
//           <MenuItem onClick={handleMenuClose}>
//             <ListItemIcon>
//               <MonetizationOnIcon fontSize="small" sx={{ color: theme.palette.secondary.main }} />
//             </ListItemIcon>
//             <ListItemText primary="Subscription Management" />
//           </MenuItem>
//         </Menu>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;





import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Hidden, MenuList, Paper, ClickAwayListener, Modal } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TrainIcon from '@mui/icons-material/Train';
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useTheme } from '@mui/material/styles';
import Login from '../screen/Login';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(null);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false); // State to control the opening of the login modal
  const theme = useTheme();

  const handleMenuOpen = (event) => {
    setMenuOpen(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuOpen(null);
  };

  const handleServicesMenuOpen = () => {
    setServicesMenuOpen(!servicesMenuOpen);
  };

  const handleServicesMenuClose = () => {
    setServicesMenuOpen(false);
  };

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: theme.palette.secondary.main }}>
            LetsGO
          </Typography>
          <Hidden smDown>
            <Button color="inherit" onClick={() => console.log("Home")} sx={{ color: theme.palette.secondary.main }}>Home</Button>
            <Button color="inherit" onClick={handleServicesMenuOpen} sx={{ color: theme.palette.secondary.main }}>
              Services
              {servicesMenuOpen && (
                <Menu
                  anchorEl={document.getElementById("services-menu")}
                  open={servicesMenuOpen}
                  onClose={handleServicesMenuClose}
                  MenuListProps={{ onMouseLeave: handleServicesMenuClose }}
                >
                  <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon>
                      <TrainIcon fontSize="small" sx={{ color: theme.palette.secondary.main }} />
                    </ListItemIcon>
                    <ListItemText primary="Train Reservation" />
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon>
                      <FlightIcon fontSize="small" sx={{ color: theme.palette.secondary.main }} />
                    </ListItemIcon>
                    <ListItemText primary="Flight Reservation" />
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon>
                      <HotelIcon fontSize="small" sx={{ color: theme.palette.secondary.main }} />
                    </ListItemIcon>
                    <ListItemText primary="Hotel Reservation" />
                  </MenuItem>
                </Menu>
              )}
            </Button>
            <Button color="inherit" onClick={() => console.log("Help")} sx={{ color: theme.palette.secondary.main }}>Help</Button>
            <Button color="inherit" onClick={() => console.log("About")} sx={{ color: theme.palette.secondary.main }}>About</Button>
            <Button color="inherit" onClick={handleLoginOpen} sx={{ color: theme.palette.secondary.main }}>Login</Button>
          </Hidden>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon sx={{ color: theme.palette.secondary.main }} />
          </IconButton>
          <Menu
            anchorEl={menuOpen}
            open={Boolean(menuOpen)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <ClickAwayListener onClickAway={handleMenuClose}>
              <MenuList>
                <MenuItem onClick={handleMenuClose}>
                  <ListItemIcon>
                    <SettingsIcon fontSize="small" sx={{ color: theme.palette.secondary.main }} />
                  </ListItemIcon>
                  <ListItemText primary="CMS Updates" />
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <ListItemIcon>
                    <AccountCircleIcon fontSize="small" sx={{ color: theme.palette.secondary.main }} />
                  </ListItemIcon>
                  <ListItemText primary="Client Login" />
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <ListItemIcon>
                    <MonetizationOnIcon fontSize="small" sx={{ color: theme.palette.secondary.main }} />
                  </ListItemIcon>
                  <ListItemText primary="Subscription Management" />
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Menu>
        </Toolbar>
      </AppBar>
      <Modal open={loginOpen} onClose={handleLoginClose}>
        <Paper sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Login />
        </Paper>
      </Modal>
    </>
  );
}

export default Navbar;














