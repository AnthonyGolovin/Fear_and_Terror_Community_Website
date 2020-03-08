import React from 'react';
import PropTypes from 'prop-types';
import FatBackgroundImg from '../FatBackgroundImg';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const divStyle = {
  textAlign: 'center',
  width: '100%',
  height: '200px',
  backgroundColor: '#212121',
  color: 'white',
  marginTop: '0px'
}

const divBannerStyle = {
  height: '1200px',
  backgroundImage: 'url(' + 'https://www.voidu.com/content/products/gallery/696204.jpg' + ')',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  marginTop: '50px'
}

function ConfirmationQuestions(props){
  return (
    
    <div style={divStyle}>
        
      <Card>
        <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          Submit A ticket:
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Have you tried Working your problems out?
          </Typography>
          <br></br>
        <Button size="small" color="primary" onClick={props.onTroubleshootingConfirmation}>Yes</Button>
        </CardContent>
      </Card>
      <div style={divBannerStyle}>
    </div>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;