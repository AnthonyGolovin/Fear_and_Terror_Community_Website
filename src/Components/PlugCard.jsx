import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import { squadImg } from '../Images/halo.jpg'

//const Background = require("../Images/squad.jpg")
//    backgroundImage:`url(${Background})`,

//http://joinsquad.com/wp-content/uploads/2016/2016-08-02/btr80gif.gif

export default class MediaCard extends  React.Component {
  
  render(){
    const styles = {
        width: '500px',
        height:'500px  !important',
        margin: 'auto',
        backgroundRepeat: "no-repeat",
        backgroundImage:`url(` + this.props.background + `)` 
      }

    return (
    <div className="main-page-plugcard hover-effect">
        <div style={styles}>
            <p>{this.props.something}</p>
        </div>
    </div>
  );
}
}