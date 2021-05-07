import React from 'react';
import ProductCard from './ProductCard';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ProductForm from './ProductForm';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import ActionBar from './ProductActionBar';
import {useStyles} from '../styles/product-list'
import { DialogActions } from '@material-ui/core';




class ProductList extends React.Component {
    
    constructor(props) {
        console.log('propss',props)
        super(props);
        this.state = {
            open: false,
            productList: this.props.prodList,
            searchField: ''
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
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add New Product</DialogTitle>
                    <DialogContent>
                        <ProductForm
                            formData={{
                                id: "",
                                name:"",
                                price:""
                            }}
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
    console.log('map state',state)
    return {
        prodList: state
    }
}

export default connect(mapStateToProps)(withStyles(useStyles)(ProductList));

