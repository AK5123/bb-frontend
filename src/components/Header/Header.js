import { Box, Grid, useTheme, Zoom, Link, SvgIcon } from "@material-ui/core";
import "./header.scss";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header-container">
      <Logo/>
      <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <p className="caption-bb head">Support Us</p>
      <p className="caption-bb head">About Us</p>
      <p className="caption-bb head">Join Community</p>
      <Box
      className="button-container"
        // sx={{
        //   padding: "0 10px",
        //   height: "100%",
        //   display: "flex",
        //   alignItems: "center",
        // }}
      >
        <p className="button-text-bb">Launch App</p>
      </Box>
    </Box>
    </div>
    
  );
};

export default Header;
