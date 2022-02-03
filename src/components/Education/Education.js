import {
  Box,
  Grid,
  useTheme,
  Zoom,
  Link,
  SvgIcon,
  useMediaQuery,
} from "@material-ui/core";
import Yoga from "../../assets/icons/yoga.png";

import "./education.scss";

const Education = () => {
  const isMobileScreen = useMediaQuery("(max-width: 760px)");

  return (
    <div id="education-view">
      <Box sx={{ width: "100%", padding: "2rem" }}>
        <p>
          The <span>Trifecta</span> education
        </p>
      </Box>
      <Box sx={{ width: "100%", marginBottom: "3rem", padding: "0 2rem" }}>
        <p>
          To acheive the goal of onboarding humans from the centralized relam to
          the decentralized dark forest
        </p>
      </Box>
      <Box className="flex-col" sx={{ width: "90%", display: "flex" }}>
        <Box
          className="flex-alcenter"
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            width: "100%",
            textAlign: "left",
            marginBottom: "2rem",
          }}
        >
          <img
            style={{ maxWidth: "80%", height: "auto" }}
            src={Yoga}
            alt="logo"
          ></img>
          <p className="tl">Learn</p>
          <p className="tl">
            and understand crypto in the most easiest way possible with curated
            paths designed in getting you up and running with a solid foundation
            in no time.
          </p>
        </Box>
        <Box
          className="flex-alcenter"
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            width: "100%",
            textAlign: "left",
            marginBottom: "2rem",
          }}
        >
          <img
            style={{ maxWidth: "80%", height: "auto" }}
            src={Yoga}
            alt="logo"
          ></img>
          <p className="tl">Learn</p>
          <p className="tl">
            and understand crypto in the most easiest way possible with curated
            paths designed in getting you up and running with a solid foundation
            in no time.
          </p>
        </Box>
        <Box
          className="flex-alcenter"
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            width: "100%",
            textAlign: "left",
            marginBottom: "2rem",
          }}
        >
          <img
            style={{ maxWidth: "80%", height: "auto" }}
            src={Yoga}
            alt="logo"
          ></img>
          <p className="tl">Learn</p>
          <p className="tl">
            and understand crypto in the most easiest way possible with curated
            paths designed in getting you up and running with a solid foundation
            in no time.
          </p>
        </Box>
      </Box>
    </div>
  );
};
export default Education;
