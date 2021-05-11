import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';


export default function ButtonAppBar(props) {

    const avtarStyle = {
        width: '42px',
        height: '42px',
    }
    const classes = {
        logo: {
          margin: "auto",
          textAlign: "center",
          maxWidth: "50%",
          maxHeight: "70%"
        },
        logoHorizontallyCenter: {
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        }
      };
       
    return (
        <AppBar position='fixed' style={{ background: '#FFF', display: 'flex' }}>
            <Toolbar>
                <div>
                   <img src="/assets/menu.svg" alt="avtar" style={{height:40}} onClick={props.openDraw}/>
                </div>
                <div style={classes.logoHorizontallyCenter}>
                   <img src="/assets/Vsquarelogo.svg" alt="avtar"  />
                </div>
                <div style={{marginLeft: 'auto'}}>
                    <Avatar alt="Remy Sharp" src="https://picsum.photos/536/354" style={avtarStyle}/>
                </div>
            </Toolbar>
        </AppBar>
        
    );
}
