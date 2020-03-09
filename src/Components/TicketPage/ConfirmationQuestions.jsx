import React from 'react';
import PropTypes from 'prop-types';
import FatBackgroundImg from '../FatBackgroundImg';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const divStyle = {
  textAlign: 'center',
  width: '100%',
  height: '200px',
  backgroundColor: '#212121',
  color: 'white',
  marginTop: '0px'
}

const useStyles = makeStyles({
  card: {
      
      maxWidth: 900,
    
  },
  container: {
      padding: 30,
      backgroundColor: "#696969",

  },
  triangle: {
      borderLeft: "100px solid #1f1e1e",
      borderTop: "100px solid transparent",
      borderBottom: "100px solid transparent",
      borderRight: "100px solid #1f1e1e",
      backgroundColor: "#474747",

  },
  iframeBorder: {
      border: "10px solid #1f1e1e"
  }
});

const divBannerStyle = {
  height: '1200px',
  backgroundImage: 'url(' + 'https://www.voidu.com/content/products/gallery/696204.jpg' + ')',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  marginTop: '50px'
}

function ConfirmationQuestions(props){

  const theme = createMuiTheme({
    palette: {
        type: 'dark'
    }
  });

  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
    <div style={divStyle}>
    <Grid container 
        spacing={3}  
        justify="center"
        alignItems="center">
      <Grid className={classes.card} item xs>
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
      </Grid>
    </Grid>
      <div style={divBannerStyle}>
      </div>
    </div>
    <div className="JoinUs" >
        <iframe src="https://disweb.dashflo.net/channels/310647178689249281/310647178689249281" height="500px" width="50%"></iframe>
    </div>
    </MuiThemeProvider>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;