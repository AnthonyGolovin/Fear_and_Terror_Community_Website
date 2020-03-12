import React from 'react';
import ContentDiv from './ContentDiv';
import FatBackgroundImg from './FatBackgroundImg';
import NavBar from './NavBar';
import TwitchEmbed from './TwitchEmbed';



const divBackStyle = {
    height: '1000px',
    backgroundImage: 'url(' + 'https://www.voidu.com/content/products/gallery/696204.jpg' + ')',
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

const imageLogo = {
    width:"10rem"
}

const blobdiv = {
    textAlign: "center",
    padding: "40px",
    width: "250px"
}


class Home extends React.Component {

    render(){

        return(

    <div className="Home" >
        <div style={divBackStyle}> 
            <div style={blobdiv}>
            <img className="blob"src="https://a.thumbs.redditmedia.com/7b_S8mKGe74vu7IVLHoR-Tzj_1Ca2I-d-BA8FscEF04.png"></img>
            <hr></hr>
            <br></br>
            <br></br>
            <img style={imageLogo} src={require("../Images/discord.png")}></img>
            <br></br>
            <br></br>
            </div>
        </div>
        
            <div style={{divBackStyle}}></div>
           
            <div>
            <ContentDiv></ContentDiv>
            <TwitchEmbed></TwitchEmbed>
            </div>
    </div>
        );
    }
}
export default Home;
