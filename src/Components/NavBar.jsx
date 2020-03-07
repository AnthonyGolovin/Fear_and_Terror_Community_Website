import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuItem from '@material-ui/core/MenuItem';
import Box from "@material-ui/core/Box";
import { Link } from 'react-router-dom';

const logoStyle = {
    width: '100px',
    height: '100px'
}

export default function ElevateAppBar(props) {

  return (
      <div>
      <React.Fragment>      
        <AppBar>
          <Toolbar > 
            <img src="https://a.thumbs.redditmedia.com/7b_S8mKGe74vu7IVLHoR-Tzj_1Ca2I-d-BA8FscEF04.png" style={logoStyle}/>
            <Box p={1} width="100%" >
              <Typography variant="h4" style={{float: 'left'}}>Fear and Terror</Typography>
            </Box>
            <Box p={1} flexShrink={1} >
                <MenuItem><Link to="/">Home</Link></MenuItem></Box>
            <Box p={2} flexShrink={1} >
                <MenuItem><Link to="/newticket">Submit a ticket</Link></MenuItem></Box>
            <Box p={3} flexShrink={1} >
                <MenuItem>Join Us</MenuItem></Box>
            <Box p={4} flexShrink={1} >
                <MenuItem>Login</MenuItem></Box>
              
          </Toolbar>
        </AppBar>

      <Toolbar />
    </React.Fragment>
    </div>
  );
}