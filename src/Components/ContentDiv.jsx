import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

const divStyle = {
    textAlign: 'center',
    width: '100%',
    height: '370px',
    backgroundColor: '#212121',
    color: 'white',
    padding: '30px'
}
export default function ContentDiv() {

    return (
        <div style={divStyle} className="plugcard-annoyance">
            <Grid container 
             direction="row"
             justify="center"
             alignItems="center"
             spacing={20}>
                <Grid item md>
                    <div className="squadImage plugcard">
                        <div>
                            <p style={{paddingTop: "80px"}}>
                                <img style={{width: "190px"}} src={require("../Images/squadLogo.png")}></img>
                                <Typography style={{textAlign: "justify", padding: "10px"}}variant="body2" gutterBottom>
                                    Squad is a tactical first-person shooter video game "set in the current modern day environment" being developed by Canadian studio Offworld Industries.
                                </Typography>
                                <br></br>
                                <Button variant="outlined" color="secondary">Read More</Button>
                            </p>
                        </div>
                    </div>
                </Grid>
                <Grid item md>
                    <div className="haloImage plugcard">
                    <div>
                            <p style={{paddingTop: "50px"}}>
                                <img style={{width: "190px"}} src={require("../Images/haloLogo.png")}></img>
                                    <Typography style={{textAlign: "justify", padding: "10px"}}variant="body2" gutterBottom>
                                        Squad is a tactical first-person shooter video game "set in the current modern day environment" being developed by Canadian studio Offworld Industries.
                                    </Typography>
                                    <br></br>
                                    <Button variant="outlined" color="secondary">Read More</Button>
                            </p>
                        </div>
                    </div>

                </Grid>
                <Grid item md>
                    <div className="rainbowImage plugcard">
                    <div>
                            <p style={{paddingTop: "70px"}}>
                                <img style={{width: "190px"}} src={require("../Images/rainbowLogo.png")}></img>
                                    <Typography style={{textAlign: "justify", padding: "10px"}}variant="body2" gutterBottom>
                                        Squad is a tactical first-person shooter video game "set in the current modern day environment" being developed by Canadian studio Offworld Industries.
                                    </Typography>
                                    <br></br>
                                    <Button variant="outlined" color="secondary">Read More</Button>
                            </p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
  }