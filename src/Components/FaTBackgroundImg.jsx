import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuItem from '@material-ui/core/MenuItem';


const divBackStyle = {
    height: '600px',
    backgroundImage: 'url(' + 'https://i.imgur.com/K4jLymZ.png' + ')'
}


export default function FaTBackgroundImg() {

    return (
        <div style={divBackStyle}>
        
        </div>
    );
  }