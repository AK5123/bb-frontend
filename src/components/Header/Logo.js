import { Box, SvgIcon } from "@material-ui/core";
import { ReactComponent as LogoIcon } from "../../assets/icons/sword.svg";
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
      <LogoIcon />
      <p className="subtitle-bb" style={{ paddingLeft: "20px" }}>
        Battle <span className="bright">Brains</span>
      </p>
    </Box>
  );
};

export default Logo;
