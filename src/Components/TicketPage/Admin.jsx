  
import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';

const divStyle = {
  textAlign: 'center',
  width: '100%',
  height: '400px',
  backgroundColor: '#212121',
  color: 'white',
  margin: '0px'
}

function Admin(props){
  return (
    <div style={divStyle}>
      <h2>Admin</h2>
      <TicketDetail />
      <TicketList
        ticketList={props.ticketList}
        currentRouterPath={props.currentRouterPath}/>
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;