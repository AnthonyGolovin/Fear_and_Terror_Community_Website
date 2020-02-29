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


const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    margin: 'auto',
  },
  media: {
    height: 180,
  },
  
});

// const theme = createMuiTheme({
//     palette: {
//       primary: {
//         main: '#212121',
//       },
//       secondary: {
//         light: '#f44336',
//         main: '#b71c1c',
//         contrastText: '#ffebee',
//       },
//       contrastThreshold: 3,
//       tonalOffset: 0.2,
//     },
//   });

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="http://joinsquad.com/wp-content/uploads/2016/2016-08-02/btr80gif.gif"
          title="Squad Gameplay"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Competitve Squad 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Join our Fear and Terror competitve Squad team to compete in monthly tournaments to
            win prizes and more.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}