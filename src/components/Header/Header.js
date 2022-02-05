import { Box, Grid, useTheme, Zoom, Link, SvgIcon } from "@material-ui/core";
import "./header.scss";
import Logo from "./Logo";
import { ReactComponent as NavIcon} from "../../assets/icons/nav-icon.svg";

const Header = ({onSideNavClick}) => {
  return (
    <div className="header-container">
      <Logo/>
      <Box
      className="nav-tabs"
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        width: '50%',
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
    <NavIcon className="ham" onClick={onSideNavClick}/>
    </div>
    
  );
};

export default Header;
