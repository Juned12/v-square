import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, makeStyles } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import ProductForm from './productform.component';
import ConfirmUpdate from './confirm-update.component';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({

  closeButton: {
    position: 'absolute',
    right: 8,
    top: 8,
    color: 'grey',
  },
});

const UpdateProduct = (props ) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openConfirmationDialog, setOpenConfirmationDialog] = React.useState(false);
    const [data, setData] = React.useState(props.formData);

    const openDialog = (e) => {
        setOpen(true)
    }
    const closeDialog = (e) => {
        setOpen(false)
    }
    const closeConfirmationDialog = (e) => {
      setOpenConfirmationDialog(false)
    }
    const handleSubmit = (e) => {
      props.handleSubmit(e,data)
      setOpen(false)
      setOpenConfirmationDialog(false)
    } 
    function confirmProductUpdate(e,data) {
        setData(data)
        e.preventDefault()
        props.handleMenuClose()
        setOpenConfirmationDialog(true)
      }
    return(
        <div>
            <MenuItem onClick={openDialog}>
                Edit
            </MenuItem>
            <Dialog open={open} onClose={closeDialog} aria-labelledby="form-dialog-title" scroll={'body'}>
            
                <DialogTitle id="form-dialog-title">
                  Edit Product
                  <IconButton  className={classes.closeButton} onClick={closeDialog}>
                    <CloseIcon />
                  </IconButton>
                </DialogTitle>
                <DialogContent>
                    <ProductForm
                        formData={data}
                        handleSubmit={confirmProductUpdate}
                    />
                </DialogContent>
                <DialogActions></DialogActions>
            </Dialog>
            <ConfirmUpdate 
              openDialog={openConfirmationDialog}
              updateProdRecord ={handleSubmit}
              handleClose={closeConfirmationDialog}
            />
        </div>
    )
}

export default UpdateProduct;