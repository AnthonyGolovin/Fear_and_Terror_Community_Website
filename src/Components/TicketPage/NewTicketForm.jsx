import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'

function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

  const divStyle = {
    textAlign: 'center',
    width: '100%',
    height: '400px',
    backgroundColor: '#212121',
    color: 'white',
    margin: '0px'
  }

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value, id: v4(), timeOpen: new Moment()});
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }
  const classes = useStyles();
  return (
    
    <div style={divStyle}>
      <form onSubmit={handleNewTicketFormSubmission}>
        
      <TextField id="outlined-basic" label="Outlined" variant="outlined" id='names' placeholder='Name'
          
          ref={(TextField) => {_names = TextField;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;