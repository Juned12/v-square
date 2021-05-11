import React from 'react';
import { Grid, Typography, CardMedia, CardContent, CardActionArea, Card, Menu } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux';
import { titleFontStyle, priceFontStyle, hsnFontStyle, useStyles } from '../styles/product-card.style'
import DeleteProduct from './delete-product.component';
import UpdateProduct from './edit-product.component';
import ProductInfo from './product-detail.component';


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
const closeInfo = () => {
  setShowInfo(false);
};

  return ( 
    <div> 
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Product"
          height="150"
          width="390"
          image={productData.imageUrl || "https://picsum.photos/536/354"}
          title="Product"
          onClick={()=>setShowInfo(true)}
        />
        <div className={classes.myComponent}>
          <CardContent>
            <Grid container style={{'marginBottom':'10px'}}>
              <Grid item xs={6} sm={6}>
                <Typography style={titleFontStyle}>
                  {productData.name}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Typography style={priceFontStyle}>
                  Rs. {productData.price}
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6} sm={6}>
                <Typography component="p" style={hsnFontStyle}>
                  Category : {productData.category}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6}>
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
      closeInfo={closeInfo}
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