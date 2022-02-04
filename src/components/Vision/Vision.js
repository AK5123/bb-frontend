import {
    Box,
    Grid,
    useTheme,
    Zoom,
    Link,
    SvgIcon,
    useMediaQuery,
  } from "@material-ui/core";
  
  import VisionImage from "../../assets/icons/vision.png";
  import VisionBG from "../../assets/icons/vision-bg.png";

  import "./vision.scss";
  
  const Vision = () => {
    const isMobileScreen = useMediaQuery("(max-width: 760px)");
  
    return (
      <div id="vision-view">
        <img className="vision-bg" height={'30%'} src={VisionBG} style={{
    position: 'absolute',
    width: '100%',
    top: 0,}}></img>
        <div className="title-container">
            <p className="title-bb" style={{marginTop: '20px'}}>The <span>grand</span> vision</p>
            <p className="subtext">Moving towards a multi-chain future, Battle brains intends to be a go-to learning platform for beginners in every chain</p>
        </div>
        <p className="subtitle-bb quote-text" style={{marginTop: '30px'}}>” Blockchains are <span>cities</span> “</p>
        <div className="section-2">
        <div className="content-container">
              <div className="content-image">
                  <img className="vision-image" src={VisionImage} />

              </div>
              <div className="content-text">
                  <p className="subtitle-bb">Every city has its own <span>school</span></p>
                  <p className="caption-bb add-margin">Schools are where people would start their journey in the <span>digital world</span> where blockchains are cities.</p>
                  <p className="caption-bb add-margin">In the traditional realm, quality education and peer-group is expensive, but in web3, education will be <span>free</span>.</p>
                  <p className="caption-bb add-margin">Collect <span>XP</span> by completing quests and learning to unlock amazing rewards.</p>
                  <p className="caption-bb add-margin">Get to practice what you learn in <span>Battle Brains Lab</span></p>
                  <p className="caption-bb add-margin">Make friends and learn together like in a <span>class-room</span></p>
                  <p className="caption-bb add-margin">Graduate with opportunities from protocols & ecosystems, by proving your <span>mettle</span>.</p>
              </div>
          </div>

        </div>
            

        
      </div>
    );
  };
  export default Vision;
  