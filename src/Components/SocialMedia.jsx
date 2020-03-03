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
        </MuiThemeProvider>
        );
    }