import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({

    root: {
      flexGrow: 1,
    },
    closeButton: {
      position: 'absolute',
      right: 8,
      top: 8,
      color: 'grey',
    },
    dialogTitle: {
      padding: '5px 24px'
  },
  deleteButton: {
      backgroundColor: '#0098DA',
      width: 200,
      marginBottom: 20,
      borderRadius: 20,
  }
  });

const ConfirmDelete = (props) => {
    const classes = useStyles();

    return (
        <Dialog open={props.openDialog}>
            <div style={{padding:'10px 55px'}}>
                <DialogTitle className={classes.dialogTitle} >
                    <IconButton  className={classes.closeButton} onClick={props.handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent style={{justifyContent:'center', textAlign:'center'}}>
                    <h2>Confirm Delete</h2>
                    <p style={{color:"grey",fontSize:14}}>Are you sure you want to delete this product</p>
                </DialogContent>
                <DialogActions style={{justifyContent:'center', textAlign:'center'}}>
                    <Button 
                    onClick={props.deleteProdRecord}
                    variant="contained"
                    color="primary"
                    className={classes.deleteButton}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </div>

          </Dialog>

    )
}

export default ConfirmDelete;