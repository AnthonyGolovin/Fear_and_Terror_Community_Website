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

const textBackStyle = {
    color: "white",
    fontSize: 120,
    margin: 35,
    fontFamily: 'Sans-serif',
    paddingLeft: '50%'
}


export default function FaTBackgroundImg() {

    return (
        <div style={divBackStyle}>
        <h1 style={textBackStyle}>Welcome To </h1>
        <h1 style={textBackStyle}> Fear and Terror</h1>
        </div>
    );
  }