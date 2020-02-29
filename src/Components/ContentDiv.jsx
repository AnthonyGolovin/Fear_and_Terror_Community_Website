import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuItem from '@material-ui/core/MenuItem';
import PlugCard from './PlugCard'

const divStyle = {
    textAlign: 'center',
    width: '100%',
    height: '400px',
    backgroundColor: '#212121',
    color: 'white',
    margin: '0px'
}


export default function ContentDiv() {

    return (
        <div style={divStyle}>
            <p>feqwfef</p>
            <PlugCard></PlugCard> 
            
        </div>
    );
  }