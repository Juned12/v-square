import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle,
        IconButton, Grid, withStyles, Typography
} from '@material-ui/core';
import ProductCard from './product-card.component';
import ProductForm from './productform.component';
import { connect } from 'react-redux';
import ActionBar from './product-actionbar.component';
import {useStyles} from '../styles/product-list.style'
import CloseIcon from '@material-ui/icons/Close';

class ProductList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            productList: this.props.prodList,
            searchField: '',
            productData: {
                name: '',
                price: '',
                description: '',
                quantity: '',
                price: '',
                dop: '',
                category: ''            
            }
          };
    }
    componentDidMount() {
        this.setState({productList:this.props.prodList});
    }
    componentDidUpdate(prevProps, prevState) {
            if (prevProps.prodList !== this.props.prodList) {
                this.setState({productList:this.props.prodList});
          }
    }
    handleClickOpen = () => {
        this.setState({open:true});
    };
    
    handleClose = () => {
        this.setState({open:false});
    };
    handleSubmit = (e, data) => {
        const result = Math.random().toString(36).substring(2,7);
        data.id = result
        this.props.dispatch({
            type:'ADD_PRODUCT',
            data
        });
        this.setState({open:false});
        e.preventDefault();  
    }
    onSearchChange = event => {
        this.setState({ searchField: event.target.value });
      };
    render() {
        const { classes } = this.props;
        const { productList, searchField } = this.state;
        const filteredProduct = productList.filter(product =>
        product.name.toLowerCase().includes(searchField.toLowerCase())
        );
    return (
        <div>
            <div>
                <ActionBar
                    handleClick={this.handleClickOpen}
                    onSearchChange={this.onSearchChange}
                    productCount={productList.length}
                    />    
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title" scroll={'body'} >
                <DialogTitle className={classes.dialogTitle} onClose={this.handleClose}>
                    <Typography variant="h6" align="center">Add Product</Typography>
                    <IconButton aria-label="close" className={classes.closeButton} onClick={this.handleClose}>
                        <CloseIcon />
                    </IconButton>
                    
                </DialogTitle>
                    <DialogContent>
                        <ProductForm
                            formData={this.state.productData}
                            handleSubmit={this.handleSubmit}
                        />
                    </DialogContent>
                    <DialogActions></DialogActions>
                </Dialog>
            </div>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        {
                            filteredProduct.map((row)=>
                            <Grid key={row.id} item>
                                <ProductCard
                                    productData={row}     
                                />
                            </Grid>
                            )
                        }
                    </Grid>
                </Grid>
            </Grid>            
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        prodList: state
    }
}

export default connect(mapStateToProps)(withStyles(useStyles)(ProductList));