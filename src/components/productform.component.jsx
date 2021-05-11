import React, { useState, useEffect } from 'react';
import { Button, TextField, InputLabel} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Badge from '@material-ui/core/Badge';
import { useStyles, SmallAvatar } from '../styles/productform.style'


const ProductForm = (props ) => {
    const classes = useStyles();
    const [formData, setFormData] = useState({});
    const [imageUrl, setImageUrl] = useState('')
    const [errors, setErrors] = useState({})
    
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
    const onChange = e => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      onDescriptionChange(e)
    }
    const onDescriptionChange = e => {
      if(e.target.value.length>10) {
        setErrors({'description':'Only 800 Character allowed'})
      } else {
        setErrors({})
      }
    }
    const onSubmit = e => {
      const errors = {}
      var format = /[!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?]+/;
      e.preventDefault()
        Object.entries(formData).forEach((k,v)=>{
          if(k[0]==='name') {
            if(format.test(k[1])) {
              errors[k[0]] = 'Only -, _ are allowed'
            }
          }
          if(k[0]==='dop') {
            if(k[1] < new Date()) {
              errors[k[0]] = 'Future Date selected'
            }
          }
          if(k[0]==='price') {
            if(k[1] < 0) {
              errors[k[0]] = 'Invalid Price Provided'
            }
          }
          if(k[0]==='quantity') {
            if(k[1] < 0) {
              errors[k[0]] = 'Invalid Quantity Provided'
            }
          }
          if(k[0]==='description') {
            if(k[1].length > 800) {
              errors[k[0]] = 'Only 800 character allowed'
            }
          }
          if(k[1]==='') {
            errors[k[0]] = `${k[0]} is required`
          }
      })
    if(Object.keys(errors).length===0) {
      props.handleSubmit(e,formData)
    }
    setErrors(errors)
  }

    return(
      <div className={classes.myComponent}>
        <form onSubmit={e => onSubmit(e)}>
          <Grid container style={{padding:60}}>
            <Grid container direction="column" item xs={1} md={3} lg={4} sm={2} spacing={2} style={{maxWidth:"100%"}}>
              <Grid item xs>
                <InputLabel htmlFor="name">Name</InputLabel>
                <TextField
                  error={errors.name? true:false}
                  helperText={errors.name}
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
                  error={errors.description? true:false}
                  helperText={errors.description}
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
                  error={errors.quantity? true:false}
                  helperText={errors.quantity}
                  id="quantity"
                  name="quantity"
                  type="number"
                  defaultValue={quantity || ""}
                  onChange={e => onChange(e)}
                  variant='outlined'
                  placeholder="Quantity"
                />
              </Grid>
              <Grid item xs>
                <InputLabel htmlFor="price">Price</InputLabel>

                <TextField
                  error={errors.price? true:false}
                  helperText={errors.price}
                  id="price"
                  name="price"
                  type="number"
                  defaultValue={price || ""}
                  onChange={e => onChange(e)}
                  variant='outlined'
                  placeholder="Price"
                />
              </Grid>
              <Grid item xs>
                <InputLabel htmlFor="dop">Date of Purchase</InputLabel>

                <TextField
                  error={errors.dop? true:false}
                  helperText={errors.dop}
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
                  error={errors.category? true:false}
                  helperText={errors.category}
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

