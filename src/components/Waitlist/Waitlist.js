import { Box, Grid, useTheme, Zoom, Link, SvgIcon } from "@material-ui/core";
import Yoga from "../../assets/icons/yoga.png";
import LogoIcon from "../../assets/icons/bb.png";
import { ReactComponent as ForwardIcon } from "../../assets/icons/forward.svg";

import "./waitlist.scss";

const Waitlist = () => {
  return (
    <div id="waitlist-view">
      <Box sx={{ width: "100%", padding: "2rem" }}>
        <p className="subtitle-bb">
          Join the <span>waitlist</span>
        </p>
      </Box>
      <Box
        sx={{
          width: "80%",
          padding: "2rem",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
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
          <p className="caption-bb" style={{ textAlign: "left" }}>
            Get notified on new updates and avail early access. <br /> Help out
            with a quick questionaire and be and early <span>contributor</span>
          </p>
          <div className="apply" style={{ marginTop: "2rem" }}>
            <p className="button-text-bb">Apply & Join</p>
            <ForwardIcon style={{ marginLeft: "10px" }} />
          </div>
        </Box>
        <Box sx={{ padding: "2rem" }}>
          <img
            className="yoga"
            style={{ maxWidth: "80%", height: "auto", borderRadius: "60px" }}
            src={Yoga}
            alt="logo"
          ></img>
        </Box>
      </Box>
    </div>
  );
};

export default Waitlist;
