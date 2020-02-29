import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuItem from '@material-ui/core/MenuItem';


const logoStyle = {
    width: '100px',
    height: '100px'
}

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function ElevateAppBar(props) {

  return (
      <div>
      <React.Fragment>
      <CssBaseline/>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar > 
          <img src="https://a.thumbs.redditmedia.com/7b_S8mKGe74vu7IVLHoR-Tzj_1Ca2I-d-BA8FscEF04.png" style={logoStyle}/>
            <Typography variant="h4">Fear and Terror</Typography>
            <MenuItem>Home</MenuItem>
            <MenuItem>Love</MenuItem>
            <MenuItem>Me</MenuItem>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
    </div>
  );
}