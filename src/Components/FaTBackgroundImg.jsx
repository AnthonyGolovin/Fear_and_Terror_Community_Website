import React from 'react';


const divBackStyle = {
    height: '950px',
    backgroundImage: 'url(' + 'https://i.imgur.com/K4jLymZ.png' + ')'
    
}

const textBackStyle = {
    color: "white",
    fontSize: 120,
    margin: 35,
    fontFamily: 'Sans-serif',
    paddingLeft: '50%'
}


export default function FaTBackgroundImg() {

    return (
        <div style={divBackStyle}>
        </div>
    );
  }