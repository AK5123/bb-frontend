import { Box, Grid, useTheme, Zoom, Link, SvgIcon } from "@material-ui/core";
import LogoIcon from "../../assets/icons/bb.png";
import {ReactComponent as ExploreIcon } from '../../assets/icons/explore.svg'
import {ReactComponent as LandBottom } from '../../assets/icons/land-bottom.svg'
import {ReactComponent as JoinIcon } from '../../assets/icons/join-waitlist.svg'
import Header from "../Header/Header";
import Logo from "../Header/Logo";
import "./landing.scss";
import useWindowDimensions from "../../utils/useWindowDimensions";
const Landing = () => {
  const {width} = useWindowDimensions()

  return (
    <div id="landing-view">
      <LandBottom style={{width : '100%', height: (462/1512)*width, position: 'absolute', zIndex: 0, bottom: 0}}/>
      <Header />
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          paddingLeft: "40px",
          zIndex: 10,
        }}
      >
        <p className="subtitle-bb" style={{ textAlign: "left", marginTop: "40px" }}>
          Learning web3 made <br /> <span>fun</span>, <span>social</span> and{" "}
          <span>easy</span>
        </p>
        <p className="caption-bb" style={{ textAlign: "left", marginTop: "20px" }}>
          Understand blockchains and crypto with clear, concise and curated
          content. Explore learning paths tailored for you, meet and learn with
          other likeminded people. All packed in a gamified experience.
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
            <JoinIcon/>
          </div>
          <div className="button-container" style={{ marginLeft: "40px" }}>
            <a href="#education-view">
              <p className="button-text-bb" >Explore</p>
            </a>
            <ExploreIcon/>
          </div>
        </Box>
      </Box>
    </div>
  );
};
export default Landing;
