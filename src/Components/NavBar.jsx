import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuItem from '@material-ui/core/MenuItem';

const LogoStyle = {
    width: '100px',
    height: '100px'
}
//import Box from '@material-ui/core/Box';
//import Container from '@material-ui/core/Container';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};



export default function ElevateAppBar(props) {
  return (
    
    <React.Fragment>
      <CssBaseline/>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar > 
          <img src="https://a.thumbs.redditmedia.com/7b_S8mKGe74vu7IVLHoR-Tzj_1Ca2I-d-BA8FscEF04.png" style={LogoStyle}/>
            <Typography variant="h4">Fear and Terror</Typography>
            <MenuItem>Home</MenuItem>
            <MenuItem>Love</MenuItem>
            <MenuItem >Me</MenuItem>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
    
  );
}