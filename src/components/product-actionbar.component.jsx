import React from 'react';
import clsx from 'clsx';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {buttonStyle , productCountStyle} from '../styles/product-list.style'
import SearchIcon from '@material-ui/icons/Search';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: 0,
      margin: "auto",
      maxWidth: '100%',
      marginBottom: 10
    },
    myComponent: {
        
        "& .MuiOutlinedInput-root": {
            [theme.breakpoints.up('xs')]: {
                position: 'relative',
                borderRadius: '4px',
                height: '40px',
                width: '255px',
                margin: '-5px'
            },
            [theme.breakpoints.up('sm')]: {
            position: 'relative',
            borderRadius: '4px',
            height: '40px',
            width: '425px',
            margin: '-5px'
            }
        }
    },
    margin: {
        margin: theme.spacing(1),
      },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
  }));


const ActionBar = props => {
    const classes = useStyles();

    return (
        <div className={classes.paper}>
            <Grid container className={classes.root} spacing={1}>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <p style={productCountStyle}>All Product ({props.productCount})</p> 
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <div className={classes.myComponent}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end"><SearchIcon style={{color:"#E8EAED"}} /></InputAdornment>}
                            placeholder="Search by product name"
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                            labelWidth={0}
                            onChange={props.onSearchChange}
                        />
                    </FormControl>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={2} style={{marginLeft:'auto'}}>
                    <Button variant="contained" style={buttonStyle} onClick={props.handleClick}>
                        Add Product
                    </Button>
                </Grid>
            </Grid>
            </div>
    )
}

export default ActionBar;