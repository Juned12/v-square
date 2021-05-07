import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ProductForm from './ProductForm';
import { DialogActions } from '@material-ui/core';



const UpdateProduct = (props ) => {

    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState(props.formData);

    const openDialog = (e) => {
        setOpen(true)
    }
    const closeDialog = (e) => {
        setOpen(false)
    }
    function confirmProductUpdate(e,data) {
        setData(data)
        e.preventDefault()
        closeDialog()
        props.handleMenuClose()
        confirmAlert({
          title: 'Confirm to Update',
          message: 'Are you sure ?.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => props.handleSubmit(e,data)
            },
            {
              label: 'No',
              onClick: () => openDialog()
            }
          ]
        });
      }
    return(
        <div>
            <MenuItem onClick={openDialog}>
                Edit
            </MenuItem>
            <Dialog open={open} onClose={closeDialog} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Product</DialogTitle>
                <DialogContent>
                    <ProductForm
                        formData={data}
                        handleSubmit={confirmProductUpdate}
                    />
                </DialogContent>
                <DialogActions></DialogActions>
            </Dialog>
        </div>
    )
}

export default UpdateProduct;