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
      <img
        className="vision-bg"
        height={"30%"}
        src={VisionBG}
        style={{
          position: "absolute",
          width: "100%",
          top: 0,
        }}
      ></img>
      <div className="title-container">
        <p className="title-bb" style={{ marginTop: "20px" }}>
          The <span>grand</span> vision
        </p>
        <p className="subtext">
          Moving towards a multi-chain future, Battle Brain intends to be a
          go-to learning platform for beginners in every chain.
        </p>
      </div>
      <div className="content-container">
        <p className="subtitle-bb quote-text" style={{ marginTop: "15px" }}>
          ” Blockchains are <span>cities</span> “
        </p>
      </div>
      <div className="section-2">
        <div className="content-container">
          <div className="content-image">
            <img className="vision-image" src={VisionImage} />
          </div>
          <div className="content-text">
            <p className="subtitle-bb">
              Every city has its own <span>school</span>
            </p>
            <p className="caption-bb add-margin">
              We are building its schools to help everyone to navigate through
              in the digital world of blockchains to solidify its foundation.
            </p>
            <p className="caption-bb add-margin">
              In the traditional realm, quality education is expensive, but in
              web3 education will not only be free but .<span>rewarding</span>.
            </p>
            <p className="caption-bb add-margin">
              Collect <span>XP</span> by completing quests and tasks. Gain
              practical exposure and unlock amazing rewards which could shape
              your future.
            </p>
            <p className="caption-bb add-margin">
              <span>The Battle Brains Lab</span> enables all this learning in a
              gamified format.
            </p>
            <p className="caption-bb add-margin">
              Make friends and learn together like in a <span>class-room</span>
            </p>
            <p className="caption-bb add-margin">
              Graduate with opportunities from protocols & ecosystems, by
              proving your <span>mettle</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Vision;
