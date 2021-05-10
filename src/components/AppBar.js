import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';


export default function ButtonAppBar() {

    const avtarStyle = {
        width: '42px',
        height: '42px',
    }
       
    return (
        <AppBar position='fixed' style={{ background: '#FFF', display: 'flex' }}>
            <Toolbar>
                <div style={{position:"fixed", marginTop:"5px"}}>
                   <span><img src="/assets/Vsquarelogo.svg" alt="avtar" /></span>
                </div>
                <div style={{marginLeft: 'auto'}}>
                    <Avatar alt="Remy Sharp" src="https://picsum.photos/536/354" style={avtarStyle}/>
                </div>
            </Toolbar>
        </AppBar>
        
    );
}
