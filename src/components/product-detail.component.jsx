import { Dialog, DialogContent, Grid, InputLabel, IconButton, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';


const useStyles = makeStyles({
    myComponent: {
        "& .MuiButtonBase-root" :{
            bottom: 30,
            left: 10
        }
    }
});

const ProductInfo = (props) => {

    const classes = useStyles()
    return (
        <Dialog open={props.showInfo} scroll={'body'} PaperProps={{  
            style: {  
              maxWidth: '750px',  
              width: '750px'
            },  
         }} >
             
            <DialogContent style={{paddingTop:0, padding:0, overflow: "hidden"}}>
            
                <Grid container>
                    <Grid item xs={7}>
                    <Grid container
                        alignItems='center'
                        justify='center'
                        style={{ minHeight: "80vh", background: "#4a4a4a"}}
                    >
                        <img src={props.productData.imageUrl} style={{height:200, width:200}} />
                    </Grid>
                    
                    </Grid>
                    <Grid item xs={5} style={{padding:'10px', paddingTop:'30px'}}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <Grid container style={{paddingBottom:20}}>
                                    <Grid item>
                                        <InputLabel htmlFor="name">Name</InputLabel>
                                        <h3>{props.productData.name}</h3>
                                    </Grid>
                                    <Grid item style={{marginLeft: 'auto'}}>
                                        <div className={classes.myComponent}>
                                            <IconButton onClick={props.closeInfo}>
                                                <CloseIcon />
                                            </IconButton>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={8} style={{paddingBottom:20}}>
                                    <Grid item>
                                        <InputLabel htmlFor="name">Price</InputLabel>
                                        <h3>{props.productData.price}</h3>
                                    </Grid>
                                    <Grid item>
                                        <InputLabel htmlFor="name">Quantity</InputLabel>
                                        <h3>{props.productData.quantity}</h3>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={4} style={{paddingBottom:20}}>
                                    <Grid item>
                                        <InputLabel htmlFor="name">Category</InputLabel>
                                        <h3>{props.productData.category}</h3>
                                    </Grid>
                                    <Grid item>
                                        <InputLabel htmlFor="name">Date of Purchase</InputLabel>
                                        <h3>{props.productData.dop}</h3>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={4}>
                                    <Grid item>
                                        <InputLabel htmlFor="name">Description</InputLabel>
                                        <div style={{height:140, overflowY:'auto'}}>
                                            <h3>{props.productData.description}</h3>
                                        </div>
                                    </Grid>            
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default ProductInfo;