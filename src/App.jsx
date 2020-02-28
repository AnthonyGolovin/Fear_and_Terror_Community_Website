import { Switch } from 'react-router-dom';
import React from 'react';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import NavBar from './Components/NavBar';
import './App.css';

// We don't need this background style anymore. 
// Visit App.css to see the background of "body"

/*
// const backgroundStyle = {
//    backgroundPosition: 'center center',
//    height: '100vh',
//    display: 'inlineBlock',
//    backgroundRepeat: 'no-repeat',
//    backgroundSize:'cover',
//    backgroundImage: 'url(' + 'https://i.imgur.com/K4jLymZ.png' + ')',
// }; */


function App() {

// MUI theme applied to the WHOLE APPLICATION
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#212121',
      },
      secondary: {
        light: '#f44336',
        main: '#b71c1c',
        contrastText: '#ffebee',
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
    
      <div className="App" >
        <NavBar></NavBar>
        <Switch>
          {/* <Route exact path='/' component={KegList} /> 
      <Route path='/KegAttributes' component={KegAttributes} /> */}
        </Switch> 
        <div style={{fontSize:'40px'}}>{[...new Array(12)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`)
          .join('\n')}</div>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
