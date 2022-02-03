import { Box, Grid, useTheme, Zoom, Link, SvgIcon } from "@material-ui/core";
import "./header.scss";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        height: "20vh",
        padding: "15px",
      }}
    >
      <p className="head">Support Us</p>
      <p className="head">About Us</p>
      <p className="head">Join Community</p>
      <Box
        sx={{
          padding: "0 10px",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="launch">
          <p className="head">Launch App</p>
        </div>
      </Box>
    </Box>
  );
};

export default Header;
