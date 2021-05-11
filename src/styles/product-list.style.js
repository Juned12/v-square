export const buttonStyle = {
    background: "#0098DA",
    color: "#FFF",
    font: "Rubik",
    size: "14px",
    height: "40px",
    width: "200px"
}
export const productCountStyle = {
  fontFamily: "Rubik",
  fontSize: 25,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: 0,
  marginRight: 20

}

export const useStyles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 500
    },
    control: {
      padding: theme.spacing(2),
    },
    dialogTitle: {
        padding: '45px 24px'
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    avtarButton: {
      position: 'absolute',
      right: theme.spacing(35),
      top: theme.spacing(2),
      color: theme.palette.grey[500],
    },
    title: {
      position: 'absolute',
      right: theme.spacing(31),
      top: theme.spacing(8)
    },
  });

  