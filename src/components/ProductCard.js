import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux';
import { titleFontStyle, priceFontStyle, hsnFontStyle, useStyles } from '../styles/product-card-style'
import DeleteProduct from './DeleteProduct';
import UpdateProduct from './EditProduct';
import ProductInfo from './ProductDetail';


const ProductCard = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showInfo, setShowInfo] = React.useState(false);

  const [productData, setProductData] = React.useState([{}]);
  const openMenu = Boolean(anchorEl);
  const classes = useStyles();

  React.useEffect(() => {
    setProductData(props.productData);
  }, [props])

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (e) => {
    props.dispatch({
        type:'DELETE_PRODUCT',
        productData
    });
    e.preventDefault();   
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 
  const handleSubmit = (e, data) => {
    data.id = productData.id
    props.dispatch({
        type:'UPDATE_PRODUCT',
        data
    });
    e.preventDefault();   
}

  return ( 
    <div> 
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Product"
          height="150"
          width="390"
          image={productData.imageUrl}
          title="Product"
          onClick={()=>setShowInfo(true)}
        />
        <div className={classes.myComponent}>
          <CardContent>
            <Grid container style={{'marginBottom':'10px'}}>
              <Grid item xs={12} sm={6}>
                <Typography style={titleFontStyle}>
                  {productData.name}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography style={priceFontStyle}>
                  Rs. {productData.price}
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Typography component="p" style={hsnFontStyle}>
                  Category : {productData.category}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <MoreVertIcon
                  aria-label="more"
                  aria-haspopup="true"
                  onClick={handleClick}
                />
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={openMenu}
                  onClose={handleMenuClose}
                  style={{'padding':'0px'}}
                  PaperProps={{  
                    style: {  
                      width: 200,  
                    },  
                 }} 
                >
                  <UpdateProduct
                    formData={productData}
                    handleSubmit={handleSubmit}
                    handleMenuClose={handleMenuClose}
                  />
                  <DeleteProduct
                    deleteProdRecord={handleDelete}
                    handleMenuClose={handleMenuClose}
                  />
                </Menu>    
              </Grid>
            </Grid>
          </CardContent>
        </div>
      </CardActionArea>
    </Card> 
    <ProductInfo
      showInfo={showInfo}
      productData={productData}
    /> 
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      prodList: state
  }
}

export default connect(mapStateToProps)(ProductCard);
