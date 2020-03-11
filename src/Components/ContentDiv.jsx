import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuItem from '@material-ui/core/MenuItem';
import PlugCard from './PlugCard'
import Grid from "@material-ui/core/Grid";
import { squadImg } from '../Images/halo.jpg'

const squad = require("../Images/squad.jpg")
const divStyle = {
    textAlign: 'center',
    width: '100%',
    height: '400px',
    backgroundColor: '#212121',
    color: 'white',
    padding: '30px'
}

const imageStyle = {
    border: '5px'
}



export default function ContentDiv() {

    return (
        <div style={divStyle} className="plugcard-annoyance">
            <Grid container 
             direction="row"
             justify="center"
             alignItems="center"
             spacing={20}>
                <Grid item md>
                    <div className="squadImage plugcard">
                        <div>
                            <p style={{paddingTop: "160px"}}>
                                <img style={{width: "190px"}} src={require("../Images/squadLogo.png")}></img>
                            <Typography gutterBottom variant="h6" component="h2">
                                Tactical Game blah blah
                            </Typography>
                            <Typography gutterBottom variant="h6" component="h2">
                                Copy paste the Wikipedia definition
                            </Typography>
                            </p>
                        </div>
                    </div>
                </Grid>
                <Grid item md>
                    <div className="haloImage plugcard">
                    <div>
                            <p style={{paddingTop: "160px"}}>
                                <img style={{width: "190px"}} src={require("../Images/squadLogo.png")}></img>
                            <Typography gutterBottom variant="h6" component="h2">
                                Tactical Game blah blah
                            </Typography>
                            <Typography gutterBottom variant="h6" component="h2">
                                Copy paste the Wikipedia definition
                            </Typography>
                            </p>
                        </div>
                    </div>

                </Grid>
                <Grid item md>
                    <div className="rainbowImage plugcard">
                    <div>
                            <p style={{paddingTop: "160px"}}>
                                <img style={{width: "190px"}} src={require("../Images/squadLogo.png")}></img>
                            <Typography gutterBottom variant="h6" component="h2">
                                Tactical Game blah blah
                            </Typography>
                            <Typography gutterBottom variant="h6" component="h2">
                                Copy paste the Wikipedia definition
                            </Typography>
                            </p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
  }