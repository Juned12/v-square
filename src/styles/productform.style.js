import { makeStyles, withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';


export const SmallAvatar = withStyles((theme) => ({
    root: {
      width: 40,
      height: 40,
      backgroundColor: "grey"
      
    },  
  }))(Avatar);
  
export const useStyles = makeStyles((theme) => ({
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