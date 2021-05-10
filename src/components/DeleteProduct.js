import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import ConfirmDelete from './ConfirmDelete';


class DeleteProduct extends React.Component {
  constructor(props) {

  super(props);
    this.state = {
      openDialog: false
    }
  }

  confirmDeleteEmployee = () => {
    this.setState({openDialog:true})
    this.props.handleMenuClose()

  }
  handleClose = () => {
    this.setState({openDialog:false})

  }
  render() {
    const { classes } = this.props;
    return(
      <div>
        <MenuItem onClick={this.confirmDeleteEmployee}>
         Delete
        </MenuItem>
          <ConfirmDelete 
            openDialog={this.state.openDialog}
            deleteProdRecord ={this.props.deleteProdRecord}
            handleClose={this.handleClose}
          />         
      </div>
    )
}
}

export default DeleteProduct;