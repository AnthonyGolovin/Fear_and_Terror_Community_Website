import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import Button from '@material-ui/core/Button';

import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    card: {
        margin: 10,
        maxWidth: 350,
        marginTop:20
      
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


export default function TwitchEmbed() {
    const theme = createMuiTheme({
        palette: {
            type: 'dark'
        }
      });
    const classes = useStyles();
      return(
        <MuiThemeProvider theme={theme}>
         <div className={classes.triangle}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
          <iframe className={classes.iframeBorder}
            src="https://player.twitch.tv/?video=v167917586&autoplay=true"
            height="480"
            width="850"
            frameborder="0"
            scrolling="no"
            allowfullscreen="true"
            >
           </iframe>
           </Grid>
            <Grid container 
                spacing={3}  
                justify="center"
                alignItems="center">
              <Grid className={classes.card} item xs>
                <Card>
                  <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    > Squad sukk lol
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    <br></br>
                   <Button size="small" color="primary">Learn More</Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid  className={classes.card} item xs>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    > FaT are recruiting
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                  <br></br>
                  <Button size="small" color="primary">Learn More </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid className={classes.card} item xs>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    > Skinny people
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                  <br></br>
                  <Button size="small" color="primary">Learn More </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
        </div>
      </MuiThemeProvider>
        );
    }