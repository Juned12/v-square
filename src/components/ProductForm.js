import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';



const ProductForm = (props ) => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
      setFormData(props.formData);
  }, [props])

    const { name, price } = props.formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    return(
        <form onSubmit={e => props.handleSubmit(e,formData)}>
          <Grid container spacing={2}>
            <Grid>
              <TextField
                required
                label="Name"
                id="margin-normal"
                name="name"
                defaultValue={name}
                onChange={e => onChange(e)}
              />
            </Grid>
            <Grid>
              <TextField
                required
                label="Price"
                type="number"
                id="margin-normal1"
                name="price"
                defaultValue={price}
                onChange={e => onChange(e)}
              />    
            </Grid>
            <Grid> 
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
    )
}

export default ProductForm;
