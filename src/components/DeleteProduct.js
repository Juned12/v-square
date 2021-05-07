import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


const DeleteProduct = (props ) => {
    
    function confirmDeleteEmployee(e) {
        props.handleMenuClose()
        confirmAlert({
          title: 'Confirm to Delete',
          message: 'Are you sure ?.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => props.deleteProdRecord(e)
            },
            {
              label: 'No',
            }
          ]
        });
      }
    return(
        <MenuItem onClick={confirmDeleteEmployee}>
        Delete
        </MenuItem>
    )
}

export default DeleteProduct;