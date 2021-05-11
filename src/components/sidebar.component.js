import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ButtonAppBar from './appbar.component';
import { Link } from "react-router-dom";
import ProductList from './productlist.component';
import {useStyles, fontStyle, rectStyle} from '../styles/side-bar.style'


export default function ClippedDrawer(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
      <ButtonAppBar />
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
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
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        { props.page==='dashboard' ? <h1>Dashboard</h1> : <ProductList /> }
      </main>
    </div>
  );
}
