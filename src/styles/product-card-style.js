import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles({
  root: {
    maxWidth: 258,
    maxHeight:236.5,
  },
  myComponent: {
    "& .MuiSvgIcon-root": {
      padding: 0,
      float: 'right',
      color: '#B5B9C1',
      width: 20,
      marginRight: -10
    },
    "& .MuiCardContent-root": {
      paddingTop: 20,
      paddingLeft: 15,
      paddingRight: 15
    }
  }

});

export const titleFontStyle = {
    'fontFamily': 'Montserrat',
    'fontSize': '14px',
    'fontStyle': 'normal',
    'fontWeight': '600',
    'lineHeight': '20px',
    'letterSpacing': '0px',
    'textAlign': 'left',
    'color': '#182C4C'
  }
export const priceFontStyle = {
    'fontFamily': 'Rubik',
    'fontSize': '14px',
    'fontStyle': 'normal',
    'fontWeight': '400',
    'lineHeight': '24px',
    'letterSpacing': '0em',
    'textAlign': 'right',
    'color': '#AC1F23'
  }
  
export const hsnFontStyle = {
    'fontFamily': 'Rubik',
    'fontSize': '12px',
    'fontStyle': 'normal',
    'fontWeight': '400',
    'lineHeight': '17px',
    'letterSpacing': '0px',
    'textAlign': 'left',
    'color': '#8B95A5'
  }
  