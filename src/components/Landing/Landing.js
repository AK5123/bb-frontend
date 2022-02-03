import { Box, Grid, useTheme, Zoom, Link, SvgIcon } from "@material-ui/core";
import LogoIcon from "../../assets/icons/bb.png";

import Header from "../Header/Header";
import Logo from "../Header/Logo";
import "./landing.scss";
const Landing = () => {
  return (
    <div id="landing-view">
      <Logo />
      <Header />
      <Box
        sx={{
          width: "50%",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          paddingLeft: "40px",
        }}
      >
        <p style={{ textAlign: "left", marginTop: "40px" }}>
          Learning web3 made <br /> <span>fun</span>, <span>social</span> and{" "}
          <span>easy</span>
        </p>
        <p style={{ textAlign: "left", marginTop: "20px" }}>
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
          <div className="join">
            <a href="#waitlist-view">
              <p>Join Waitlist</p>
            </a>
            <img
              style={{ marginLeft: "10px" }}
              src={LogoIcon}
              width="20px"
              alt="logo"
            ></img>
          </div>
          <div className="join" style={{ marginLeft: "40px" }}>
            <a href="#education-view">
              <p>Explore</p>
            </a>
            <img
              style={{ marginLeft: "10px" }}
              src={LogoIcon}
              width="20px"
              alt="logo"
            ></img>
          </div>
        </Box>
      </Box>
    </div>
  );
};
export default Landing;
