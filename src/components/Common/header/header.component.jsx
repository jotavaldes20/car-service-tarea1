import React from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx'; //clsx es una pequeña utilidad para construir classNamecadenas condicionalmente, a partir de un objeto con claves como cadenas de clase y valores booleanos.
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from "@material-ui/icons/AccountCircle";
import HomeIcon from '@material-ui/icons/Home';
import TicketIcon from '@material-ui/icons/ConfirmationNumber';
import ListIcon from '@material-ui/icons/List';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const drawerWidth = 220;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      background: '#2E3B55' 
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36
    },
    menuButtonIconClosed: {
      transition: theme.transitions.create(["transform"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      transform: "rotate(0deg)"
    },
    menuButtonIconOpen: {
      transition: theme.transitions.create(["transform"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      transform: "rotate(180deg)"
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap"
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) +1
      }
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      marginTop: theme.spacing(1),
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    grow: {
      flexGrow: 1
    },
  }),
);

const Header = ({ currentUser }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setanchorEl] = React.useState(null);
  /*const handleDrawerOpen = () => {
    setOpen(true);
  };*/
  const handleDrawerOpen = () => {
    setOpen(!open)
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
 
  
  const handleMenu = event => {
    setanchorEl(event.currentTarget );
  };
  const handleClose = () => {
    setanchorEl(null);
  };
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
          position="fixed"
          className={classes.appBar}
        >
        <Toolbar disableGutters={true}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classes.menuButton}
            >
              <MenuIcon
                classes={{
                  root: open
                    ? classes.menuButtonIconOpen
                    : classes.menuButtonIconClosed
                }}
              />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.grow}
              noWrap
            >
              Car Service
            </Typography>
            <div>
              <IconButton
                aria-owns={anchorEl ? "menu-appbar" : undefined}
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={anchorEl}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button key="home" component={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button key="ticketList" component={Link} to="/ticketList">
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Ver Ticket Abiertos" />
            </ListItem>
            <ListItem button key="newTicket" component={Link} to="/newTicket">
              <ListItemIcon>
                <TicketIcon />
              </ListItemIcon>
              <ListItemText primary="Nuevo Ticket" />
            </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem button key="logout" component={Link} to="/sing">
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="logout" />
            </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
      </main>
    </div>
  );
}

export default Header;