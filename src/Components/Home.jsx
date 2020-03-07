import React from 'react';
import ContentDiv from './ContentDiv';
import FatBackgroundImg from './FatBackgroundImg';
import NavBar from './NavBar';
import TwitchEmbed from './TwitchEmbed';
class Home extends React.Component {

    render(){

        return(

    <div className="Home" >
        <NavBar></NavBar>
        <FatBackgroundImg></FatBackgroundImg>
        <ContentDiv></ContentDiv>
        <TwitchEmbed></TwitchEmbed>
    </div>
        );
    }
}
export default Home;
