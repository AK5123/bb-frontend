import { Box, Grid, useTheme, Zoom, Link, SvgIcon } from "@material-ui/core";
import "./header.scss";
import Logo from "./Logo";
import { ReactComponent as NavIcon } from "../../assets/icons/nav-icon.svg";

const Header = ({ onSideNavClick }) => {
  return (
    <div className="header-container">
      <Logo />
      <Box
        className="nav-tabs"
        sx={{
          justifyContent: "flex-end",
          alignItems: "center",
          width: "30%",
        }}
      >
        <a href="https://discord.gg/cbzSvhz3" className="three">
          <p className="caption-bb head">Discord</p>
        </a>
        <a href="https://t.me/battlebrains" className="three">
          <p className="caption-bb head">Telegram</p>
        </a>
        <Box className="button-container">
          <a href="https://tally.so/r/wkxPjn" className="eight">
            <p className="button-text-bb disabled">Launch App</p>
          </a>
        </Box>
      </Box>
      <NavIcon className="ham" onClick={onSideNavClick} />
    </div>
  );
};

export default Header;
