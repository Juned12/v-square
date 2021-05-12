import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {ListItem, ListItemIcon, ListItemText, IconButton, List,
         Toolbar, Drawer, Divider, Typography
      } from '@material-ui/core';
import ProductList from './productlist.component';
import {fontStyle, rectStyle, useStyles} from '../styles/side-bar.style';
import ButtonAppBar from './appbar.component';
import { Link } from "react-router-dom";
import Hidden from '@material-ui/core/Hidden';


export default function ClippedDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const list = ( <List>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <ListItem button key="dashboard" style={props.page==='dashboard'?{'backgroundColor':'#F7FCFF'}: {}}>
                    {props.page === 'dashboard' && <img src="/assets/rectangle.svg" alt="avtar" style={rectStyle}/> }
                    { props.page === 'dashboard' ?
                      
                      <ListItemIcon><img src="/assets/Vector2.svg" alt="avtar" /></ListItemIcon>
                      :
                      <ListItemIcon><img src="/assets/dashboard.svg" alt="avtar" /></ListItemIcon>
                    }
                    <ListItemText primary={<Typography style={props.page==='dashboard'?{ ...fontStyle, 'color': '#182C4C'}:{...fontStyle}}>Dashboard</Typography>}/>
                  </ListItem>
                </Link>
                <Link to="/product" style={{ textDecoration: 'none' }}>
                  <ListItem button key="product" style={props.page==='product'?{'backgroundColor':'#F7FCFF'}: {}}>
                  { props.page === 'product' && <img src="/assets/rectangle.svg" alt="avtar" style={rectStyle}/> }
                  { props.page === 'product' ?
                    <ListItemIcon><img src="/assets/product.svg" alt="avtar" /></ListItemIcon>
                    : 
                    <ListItemIcon><img src="/assets/Vector.svg" alt="avtar" /></ListItemIcon>
                  }
                    <ListItemText primary={<Typography style={props.page==='product'?{ ...fontStyle, 'color': '#182C4C'}:{...fontStyle}}>Products</Typography>} />
                  </ListItem>
                </Link>
              </List> 
  )
  
  return (
    <div className={classes.root}>
      <ButtonAppBar
       openDraw={handleDrawerOpen}
       />
       <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            { list }
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader} />  
            <Divider />
            { list }
          </Drawer>
        </Hidden>
      </nav>
      <main 
        className={clsx(classes.content, {
          [classes.contentShift]: true,
      })}>
        <Toolbar />
        { props.page==='dashboard' ? <h1>Dashboard</h1> : <ProductList /> }
      </main>
    </div>
  );
}
