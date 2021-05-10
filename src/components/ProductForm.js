import React, { useState, useEffect } from 'react';
import { Button, TextField, InputLabel} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Badge from '@material-ui/core/Badge';


const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 40,
    height: 40,
    backgroundColor: "grey"
    
  },
  
  
}))(Avatar);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  submitButton: {
    backgroundColor: '#0098DA',
    width: 200,
    borderRadius: 20,
    color: '#FFF'
  },  
  myComponent: {
    justifyContent: 'center',
    alignItems: 'center',
      "& .MuiOutlinedInput-root": {
          borderRadius: '4px',
          height: '40px',
          width: '250px',
          
      },
      "& .MuiInputLabel-root": {
        paddingBottom: '2px'
      },
      
      
    },
}));

const ProductForm = (props ) => {
    const classes = useStyles();
    const [formData, setFormData] = useState({});
    const [imageUrl, setImageUrl] = useState('')
    
    const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        const imageUrl = URL.createObjectURL(event.target.files[0])
        setImageUrl(imageUrl)
        formData.imageUrl = imageUrl
        console.log(imageUrl)
      }
     }

    useEffect(() => {
      setFormData(props.formData);
      setImageUrl(props.formData.imageUrl);

  }, [props])

    const { name, description, quantity, price, dop, category } = props.formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    return(
      <div className={classes.myComponent}>
        <form onSubmit={e => props.handleSubmit(e,formData)}>
          <Grid container style={{padding:60}}>
            <Grid container direction="column" item xs={4} spacing={2} style={{maxWidth:"100%"}}>
              <Grid item xs>
                <InputLabel htmlFor="name">Name</InputLabel>
                <TextField
                  required
                  id="name"
                  name="name"
                  defaultValue={name || ""}
                  onChange={e => onChange(e)}
                  variant='outlined'
                  placeholder="Name"
                />
              </Grid>
              <Grid item xs>
                <InputLabel htmlFor="description">Description</InputLabel>
                <TextField
                  required
                  id="description"
                  name="description"
                  defaultValue={description || ""}
                  onChange={e => onChange(e)}
                  variant='outlined'
                  placeholder="Description"
                />
              </Grid>
              <Grid item xs>
                <InputLabel htmlFor="quantity">Quantity</InputLabel>

                <TextField
                  required
                  id="quantity"
                  name="quantity"
                  defaultValue={quantity || ""}
                  onChange={e => onChange(e)}
                  variant='outlined'
                  placeholder="Quantity"
                />
              </Grid>
              <Grid item xs>
                <InputLabel htmlFor="price">Price</InputLabel>

                <TextField
                  required
                  id="price"
                  name="price"
                  defaultValue={price || ""}
                  onChange={e => onChange(e)}
                  variant='outlined'
                  placeholder="Price"
                />
              </Grid>
              <Grid item xs>
                <InputLabel htmlFor="dop">Date of Purchase</InputLabel>

                <TextField
                  required
                  id="dop"
                  name="dop"
                  type="date"
                  defaultValue={dop || ""}
                  onChange={e => onChange(e)}
                  variant='outlined'
                  placeholder="Date of purchase"
                />
              </Grid>
              <Grid item xs>
                <InputLabel htmlFor="category">Choose Category</InputLabel>
                <TextField
                  required
                  select
                  id="margin-normal"
                  name="category"
                  defaultValue={category || ""}
                  onChange={e => onChange(e)}
                  variant='outlined'
                  placeholder="Choose Category"
                >
                  <MenuItem key="1" value="one">
                    One
                  </MenuItem>
                  <MenuItem key="2" value="two">
                    Two
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid item xs style={{paddingLeft:33}}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submitButton}
                  style={{backgroundColor: '#0098DA'}}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="column" item xs={4} style={{paddingLeft:10}} >
              <Grid
                item
                container
                direction="column"
                alignItems="flex-end"
                justify="flex-start"
              >
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="raised-button-file"
                  onChange={onImageChange}
                  type="file"
                />
                <label htmlFor="raised-button-file">
                <Badge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  badgeContent={<SmallAvatar alt="Remy Sharp" src="/assets/camera-outline.svg" ></SmallAvatar>}
                >
                  
                  <Avatar style={{ width:200, height:200 }} alt="" src={imageUrl} />
                </Badge>
                </label>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    )
}

export default ProductForm;

