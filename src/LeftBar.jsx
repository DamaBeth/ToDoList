import React, { useState } from "react";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import EventIcon from '@material-ui/icons/Event';
import HomeIcon from '@material-ui/icons/Home';
import ReorderIcon from '@material-ui/icons/Reorder';
import FormCard from "./FormTodo";
import AvatarName from "./Avatar";
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 315;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        backgroundColor: "#F07167"
    },
    backgroundColor: "#F07167"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
      backgroundColor: "#F07167"
    },
  },
  toolbar: {
    marginTop: 0
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#242426',
    color:'#F2F4F4'
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#F07167",
    padding: theme.spacing(3),
    marginTop: 50
  },
}));

function LeftBar(props) {
  const { window } = props;
  const classes = useStyles();
  const styleButton = {
    color:"#F07167"
    };
  
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <AvatarName />
      
        <List>
            <ListItem button>
                <ListItemIcon style={styleButton}>
                    <WbSunnyIcon />
                </ListItemIcon>
                <ListItemText primary="Mi día" />
            </ListItem>
            <ListItem button >
                <ListItemIcon style={styleButton}>
                    <StarBorderIcon />
                </ListItemIcon>
                <ListItemText primary="Importante" />
            </ListItem>
            <ListItem button >
                <ListItemIcon style={styleButton}>
                    <EventIcon />
                </ListItemIcon>
                <ListItemText primary="Planeado" />
            </ListItem>
            <ListItem button >
                <ListItemIcon style={styleButton}>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Tareas" />
            </ListItem>
        </List>
        <Divider style={{ background:'white' }} />
        <List>
            <ListItem button >
                <ListItemIcon style={styleButton}>
                  <ReorderIcon />
                </ListItemIcon>
                <ListItemText primary="Clases" />
            </ListItem>
        </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
         
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <FormCard />
      </main>
    </div>
  );
}

LeftBar.propTypes = {
  window: PropTypes.func,
};

export default LeftBar;
