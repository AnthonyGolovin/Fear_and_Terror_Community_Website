import { Switch, Route } from 'react-router-dom';
import React from 'react';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import NavBar from './Components/NavBar';
import './App.css';
import ContentDiv from './Components/ContentDiv';
import FatBackgroundImg from './Components/FatBackgroundImg';
import TwitchEmbed from './Components/TwitchEmbed';
import Error404 from './Components/TicketPage/Error404';
import TicketList from './Components/TicketPage/TicketList';
import Header from './Components/TicketPage/Header';
import NewTicketControl from './Components/TicketPage/NewTicketControl';
import Admin from './Components/TicketPage/Admin';
import Moment from 'moment';
import Home from './Components/Home';
import JoinUs from './Components/JoinUs';

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

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    5000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) =>
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true);
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  render(){

  return (
    <MuiThemeProvider theme={theme}>
    
      <div className="App" >
        <NavBar></NavBar>
        <Switch>
          <Route exact path='/' render={()=> <Home></Home>} />
          <Route path='/joinus' component={() => { 
          window.location.href = 'https://discordapp.com/invite/DEXchRX'; 
          return null;}}/>
          <Route exact path='/viewtickets' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route path='/admin' render={(props)=><Admin ticketList={this.state.masterTicketList} currentRouterPath={props.location.pathname}/>} />
          <Route component={Error404} />
        </Switch> 
        {/* <div style={{fontSize:'40px'}}>{[...new Array(12)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`)
          .join('\n')}</div> */}
      </div>
    </MuiThemeProvider>
  );
}
}
export default App;
