import { Box, Grid, useTheme, Zoom, Link, SvgIcon } from "@material-ui/core";
import LogoIcon from "../../assets/icons/bb.png";
import { ReactComponent as ExploreIcon } from "../../assets/icons/explore.svg";
import { ReactComponent as LandBottom } from "../../assets/icons/land-bottom.svg";
import { ReactComponent as JoinIcon } from "../../assets/icons/join-waitlist.svg";
import BountiesImage from "../../assets/icons/bounties.png";

import Header from "../Header/Header";
import Logo from "../Header/Logo";
import "./landing.scss";
import useWindowDimensions from "../../utils/useWindowDimensions";
const Landing = ({ onSideNavClick }) => {
  const { width } = useWindowDimensions();

  return (
    <div id="landing-view">
      <LandBottom
        className="land-bottom"
        style={{
          width: "100%",
          height: (462 / 1512) * width,
          position: "absolute",
          zIndex: 0,
          bottom: 0,
        }}
      />
      <Header onSideNavClick={onSideNavClick} />
      <div className="bounties-mobile">
        <img src={BountiesImage} style={{ width: "100%" }}></img>
      </div>
      <Box className="landing-content-container">
        <p className="subtitle-bb landing-title" style={{ textAlign: "left" }}>
          Navigating web3 could be <br></br>
          <p style={{ paddingTop: "16px" }}>
            <span>fun</span>, <span>social</span> and <span>easy</span>
          </p>
        </p>
        <p
          className="caption-bb"
          style={{ textAlign: "left", marginTop: "20px" }}
        >
          Getting down the rabbit hole alone is often confusing and overwhelming{" "}
          <br></br>
          <br></br> Enjoy learning paths tailored for you in a gamified version{" "}
          <br></br> <br></br> Not only this, we deploy Learn-to-earn model to
          reward dedicated learners and contributors.
        </p>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            marginTop: "40px",
          }}
        >
          <div className="button-container">
            <a href="#waitlist-view">
              <p className="button-text-bb">Join Waitlist</p>
            </a>
            <JoinIcon />
          </div>
          <div className="button-container" style={{ marginLeft: "40px" }}>
            <a href="#education-view">
              <p className="button-text-bb">Explore</p>
            </a>
            <ExploreIcon />
          </div>
        </Box>
      </Box>
    </div>
  );
};
export default Landing;
