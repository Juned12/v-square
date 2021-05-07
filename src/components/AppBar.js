import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';


export default function ButtonAppBar() {

    const avtarStyle = {
        width: '42px',
        height: '42px',
    }
    const logoUStyle = {
        position: 'absolute',
        top: '1px',
        left: '32px',
    }
    const logoNetStyle = {
        position: 'absolute',
        top: '-17px',
        left: '25px',
    }
    const holeStyle = {
        position: 'absolute',
        left: '28px',
        top: '-16px',
    }
    const vStyle  = {
        top: '1px',
        left: '-26px',
        position: 'absolute',
    }
    const dot1 = {
        position: 'absolute',
        left: '40px',
    }
    const dot2 = {
        position: 'absolute',
        left: '42px',
        top: '-3px',
    }
    const dot3 = {
        position: 'absolute',
        left: '42px',
        top: '8px',
    }
    const dot4 = {
        position: 'absolute',
        left: '40px',
        top: '5px',   
    }
    const point = {
        position: 'absolute',
        left: '32px',
        top: '-16px'
    }
   
    return (
        <AppBar position='fixed' style={{ background: '#FFF', display: 'flex' }}>
            <Toolbar>
                <div style={{position:"fixed", marginLeft:"20px", marginTop:"10px"}}>
                <span><img src="/assets/path56.svg" alt="avtar" style={vStyle} /></span>
                <span><img src="/assets/path54.svg" alt="avtar" /></span>
                <span><img src="/assets/path58.svg" alt="avtar" style={logoNetStyle}/></span>
                <span><img src="/assets/path74.svg" alt="avtar" style={dot1}/></span>
                <span><img src="/assets/path74.svg" alt="avtar" style={dot2}/></span>
                <span><img src="/assets/path74.svg" alt="avtar" style={dot3}/></span>
                <span><img src="/assets/path64.svg" alt="avtar" style={point} /></span>
                <span><img src="/assets/path74.svg" alt="avtar" style={dot4}/></span>
                <span><img src="/assets/path62.svg" alt="avtar" style={holeStyle}/></span>
                <span><img src="/assets/path94.svg" alt="avtar" style={logoUStyle}/></span>
                </div>

                <div style={{marginLeft: 'auto'}}>
                    <Avatar alt="Remy Sharp" src="https://picsum.photos/536/354" style={avtarStyle}/>
                </div>
            </Toolbar>
        </AppBar>
        
    );
}
