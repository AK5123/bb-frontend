import { Box, SvgIcon } from "@material-ui/core";
import LogoIcon from "../../assets/icons/bb.png";
import "./header.scss";

const Logo = () => {
  return (
    <Box
      sx={{
        width: "max-content",
        display: "flex",
        alignItems: "center",
        left: "30px",
        top: "30px",
      }}
    >
      <img src={LogoIcon} width="100px" alt="logo"></img>
      <p className="subtitle-bb" style={{ paddingLeft: "20px" }}>
        Battle <span className="bright">Brains</span>
      </p>
    </Box>
  );
};

export default Logo;
