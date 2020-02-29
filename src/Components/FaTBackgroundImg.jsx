import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuItem from '@material-ui/core/MenuItem';

const divStyle = {
    marginRight: '50%',
    marginLeft: '50%',
    marginTop: '10%',
    textAlign: 'center',
    width: '200px',
    backgroundColor: '#212121',
    color: 'white'
}


export default function FatBackgroundImg() {

    return (
        <div style={divStyle}>
            <h1>Test</h1>
        </div>
    );
  }