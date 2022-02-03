import { Box, Grid, useTheme, Zoom, Link, SvgIcon } from "@material-ui/core";
import Yoga from "../../assets/icons/yoga.png";
import LogoIcon from "../../assets/icons/bb.png";

import "./waitlist.scss";

const Waitlist = () => {
  return (
    <div id="waitlist-view">
      <Box sx={{ width: "100%", padding: "2rem" }}>
        <p>
          Join the <span>waitlist</span>
        </p>
      </Box>
      <Box
        sx={{
          width: "80%",
          padding: "2rem",
          display: "flex",
          alignItems: "center",
        }}
        className="flex-ci"
      >
        <Box
          sx={{
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
          }}
          className="flex-center"
        >
          <p style={{ textAlign: "left" }}>
            Get notified on new updates and avail early access. <br /> Help out
            with a quick questionaire and be and early contributor.
          </p>
          <div className="apply" style={{ marginTop: "2rem" }}>
            <p>Apply & Join</p>
            <img
              style={{ marginLeft: "10px" }}
              src={LogoIcon}
              width="20px"
              alt="logo"
            ></img>
          </div>
        </Box>
        <Box sx={{ padding: "2rem" }}>
          <img
            style={{ maxWidth: "80%", height: "auto" }}
            src={Yoga}
            alt="logo"
          ></img>
        </Box>
      </Box>
    </div>
  );
};

export default Waitlist;
