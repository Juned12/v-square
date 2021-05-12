import { Dialog, DialogContent, Grid, InputLabel, IconButton, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';


const useStyles = makeStyles({
    myComponent: {
        "& .MuiButtonBase-root" :{
            bottom: 30
        }
    }
});

const ProductInfo = (props) => {

    const classes = useStyles()
    return (
        <Dialog open={props.showInfo} fullWidth={true} maxWidth='md' scroll={'body'} >
            <DialogContent style={{paddingTop:0, padding:0}}>
                <div style={{ overflow: "hidden", height: "100%", width: "100%" }}>
                    <Grid container>
                        <Grid item xs={12} sm={7} md={7}>
                            <Grid container
                                alignItems='center'
                                justify='center'
                                style={{ minHeight: "80vh", background: "#4a4a4a"}}
                            >
                                <Grid item>
                                    <img src={props.productData.imageUrl} alt="sample" style={{height:200, width:200}} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={5} md={5} style={{padding:'10px', paddingTop:'30px'}}>
                            <Grid container style={{paddingBottom:20}}>
                                <Grid item xs={6}>
                                    <InputLabel htmlFor="name">Name</InputLabel>
                                    <h3>{props.productData.name}</h3>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"right"}}>
                                    <div className={classes.myComponent}>
                                        <IconButton onClick={props.closeInfo}>
                                            <CloseIcon />
                                        </IconButton>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid spacing={8} container style={{paddingBottom:20}}>
                                <Grid xs={6} sm={6} md={6} item>
                                    <InputLabel htmlFor="name">Price</InputLabel>
                                    <h3>{props.productData.price}</h3>
                                </Grid>
                                <Grid xs={6} sm={6} md={6} item>
                                    <InputLabel htmlFor="name">Quantity</InputLabel>
                                    <h3>{props.productData.quantity}</h3>
                                </Grid>
                            </Grid>
                            <Grid container style={{paddingBottom:20}}>
                                <Grid item xs={6} sm={6} md={6}>
                                    <InputLabel htmlFor="name">Category</InputLabel>
                                    <h3>{props.productData.category}</h3>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6}>
                                    <InputLabel htmlFor="name">Date of Purchase</InputLabel>
                                    <h3>{props.productData.dop}</h3>
                                </Grid>
                            </Grid>
                            <Grid spacing={4} container>
                                <Grid item xs={12} sm={12} md={12}>
                                    <InputLabel htmlFor="name">Description</InputLabel>
                                    <div style={{height:140, overflowY:'auto'}}>
                                        <h3>{props.productData.description}</h3>
                                    </div>
                                </Grid>            
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ProductInfo;