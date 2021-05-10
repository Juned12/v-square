import { Dialog, DialogContent, Grid, InputLabel } from '@material-ui/core';
import React from 'react';

const frame = {
        height: 100,     /* equals max image height */
        width: 160,
        whiteSpace: 'nowrap',
        textAlign: 'center', 
        margin: '1em 0'
    }
const helper = {
    display: 'inline-block',
    height: '100%',
    verticalAlign: 'middle'

}
const imgStyle = {
    verticalAlign: 'middle',
    maxHeight: '100px'
}
const frame2 =
{
position: 'relative',
width: '200px',
height: '200px',
}
const img2 = {
position: 'absolute',
top: 0,
bottom: 0,
margin: 'auto'
}
const image2 =  {
'min-height': '50px'
}


const ProductInfo = (props) => {

    return (
        <Dialog open={props.showInfo} scroll={'body'} PaperProps={{  
            style: {  
              maxWidth: '750px',  
            },  
         }}  >
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
                    <Grid item xs={5} style={{padding:'10px'}}>
                        <Grid container>
                            <Grid item xs={6}  >
                                <Grid container item spacing={8}>
                                    <Grid item>
                                        <InputLabel htmlFor="name">Name</InputLabel>
                                        <h3>{props.productData.name}</h3>
                                    </Grid>
                                    <Grid item>
                                        <InputLabel htmlFor="name">Price</InputLabel>
                                        <h3>{props.productData.price}</h3>

                                    </Grid>
                                    <Grid item>
                                        <InputLabel htmlFor="name">Category</InputLabel>
                                        <h3>{props.productData.category}</h3>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} >
                                <Grid container item spacing={8}>
                                    <Grid item>
                                    <InputLabel htmlFor="name">Some</InputLabel>
                                    <h3>{props.productData.quantity}</h3>
                                    </Grid>
                                    <Grid item>
                                        <InputLabel htmlFor="name">Quantity</InputLabel>
                                        <h3>{props.productData.quantity}</h3>

                                    </Grid>
                                    <Grid item>
                                        <InputLabel htmlFor="name">Date of Purchase</InputLabel>
                                        <h3>{props.productData.dop}</h3>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid>
                                <InputLabel>Description</InputLabel>
                                <h3>{props.productData.description}</h3>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default ProductInfo;