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
  height: '1300px',
  backgroundImage: 'url(' + 'https://www.voidu.com/content/products/gallery/696204.jpg' + ')',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  marginTop: '40px'
}

const stayPutEffect = {
    position: 'fixed',
    top: '10rem',
    minWidth: '900px',
    maxWidth: '1200px',
    paddingTop: '8rem'
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
    <div style={divBannerStyle}>
    <Grid container 
        spacing={3}  
        justify="center"
        alignItems="center">

    <div  style={stayPutEffect}>
      <Card >
        <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
          SUBMIT A TICKET
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Have you tried Working your problems out?
          </Typography>
          <br></br>
          <input type="checkbox"/>
        <Button size="BIG" color="primary" onClick={props.onTroubleshootingConfirmation}>I UNDERSTAND</Button>
        </CardContent>
        
      </Card>
    <hr></hr>
      <Card>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             MAYBE IT HAS BEEN ASKED BEFORE:
            </Typography>
            <br></br>
            <Typography gutterBottom variant="h6" component="h2">
             1. Why doesn't FaT like Skinny People?
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            I was only nine years old. I loved Shrek so much, I had all the merchandise and movies. I'd pray to Shrek every night before I go to bed, thanking for the life I've been given. "Shrek is love", I would say, "Shrek is life". My dad hears me and calls me a faggot. I knew he was just jealous for my devotion of Shrek. I called him a cunt. He slaps me and sends me to go to sleep. I'm crying now and my face hurts. I lay in bed and it's really cold. A warmth is moving towards me. I feel something touch me. It's Shrek. I'm so happy. He whispers in my ear, "This is my swamp". 
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
             2. Why doesn't FaT like Skinny People?
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            I was only nine years old. I loved Shrek so much, I had all the merchandise and movies. I'd pray to Shrek every night before I go to bed, thanking for the life I've been given. "Shrek is love", I would say, "Shrek is life". My dad hears me and calls me a faggot. I knew he was just jealous for my devotion of Shrek. I called him a cunt. He slaps me and sends me to go to sleep. I'm crying now and my face hurts. I lay in bed and it's really cold. A warmth is moving towards me. I feel something touch me. It's Shrek. I'm so happy. He whispers in my ear, "This is my swamp". 
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
             3. Why doesn't FaT like Skinny People?
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            I was only nine years old. I loved Shrek so much, I had all the merchandise and movies. I'd pray to Shrek every night before I go to bed, thanking for the life I've been given. "Shrek is love", I would say, "Shrek is life". My dad hears me and calls me a faggot. I knew he was just jealous for my devotion of Shrek. I called him a cunt. He slaps me and sends me to go to sleep. I'm crying now and my face hurts. I lay in bed and it's really cold. A warmth is moving towards me. I feel something touch me. It's Shrek. I'm so happy. He whispers in my ear, "This is my swamp". 
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
             4. Why doesn't FaT like Skinny People?
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            I was only nine years old. I loved Shrek so much, I had all the merchandise and movies. I'd pray to Shrek every night before I go to bed, thanking for the life I've been given. "Shrek is love", I would say, "Shrek is life". My dad hears me and calls me a faggot. I knew he was just jealous for my devotion of Shrek. I called him a cunt. He slaps me and sends me to go to sleep. I'm crying now and my face hurts. I lay in bed and it's really cold. A warmth is moving towards me. I feel something touch me. It's Shrek. I'm so happy. He whispers in my ear, "This is my swamp". 
            </Typography>
          <br></br>
        <Button size="small" color="primary" onClick={props.onTroubleshootingConfirmation}>OK I GET IT</Button>
        </CardContent>
        
      </Card>


      </div>


    </Grid>
    </div>
    </MuiThemeProvider>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;