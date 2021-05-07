import React from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {buttonStyle , productCountStyle} from '../styles/product-list'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: '100%',
      marginBottom: 10
    },
    myComponent: {
        "& .MuiOutlinedInput-root": {
            position: 'relative',
            borderRadius: '4px',
            height: '40px',
            width: '425px'
        },
        "& .MuiGrid-spacing-xs-1 > .MuiGrid-item" : {
            display: 'flex'
        }
      }
    
  }));

const ActionBar = props => {
    const classes = useStyles();
    const searchField = {
        
    }

    return (
        <div className={classes.paper}>
            <Grid container className={classes.root} item xs={12}>
                <Grid item xs={3}>
                    <p style={productCountStyle}>All Product ({props.productCount})</p> 
                </Grid>
                <Grid container item xs={6}>
                    <div className={classes.myComponent}>
                        <TextField 
                            id="outlined-search" 
                            label="Search by product name" 
                            type="search" 
                            variant="outlined"
                            onChange={props.onSearchChange}
                            style={searchField}
                            /> 
                    </div>
                </Grid>
                <Grid container item xs={3} justify="flex-end">
                    <Button variant="contained" style={buttonStyle} onClick={props.handleClick}>
                        Add Product
                    </Button>
                </Grid>
            </Grid>
            </div>
    )
}

export default ActionBar;