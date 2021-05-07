import { makeStyles } from '@material-ui/core/styles';


export const fontStyle = {
    'fontFamily': 'Rubik',
    'fontSize': '14px',
    'fontStyle': 'normal',
    'fontWeight': 400,
    'lineHeight': '20px',
    'letterSpacing': '0px',
    'textAlign': 'left',
    'color': '#C5C8D8'
}
export const rectStyle = {
  position: 'absolute',
  left: '0px',
  height: '42px',
  width: '4px'
}

const drawerWidth = 200;

export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    
  }));