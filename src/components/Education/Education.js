import {
  Box,
  Grid,
  useTheme,
  Zoom,
  Link,
  SvgIcon,
  useMediaQuery,
} from "@material-ui/core";
import {ReactComponent as Trifecta1} from "../../assets/icons/trifecta-1.svg";
import {ReactComponent as Trifecta2} from "../../assets/icons/trifecta-2.svg";
import {ReactComponent as Trifecta3} from "../../assets/icons/trifecta-3.svg";


import "./education.scss";

const Education = () => {
  const isMobileScreen = useMediaQuery("(max-width: 760px)");

  return (
    <div id="education-view">
      <Box sx={{ width: "100%", padding: "2rem" }}>
        <p className="subtitle-bb">
          The <span>Trifecta</span> education
        </p>
      </Box>
      <Box sx={{ width: "100%", marginBottom: "3rem", padding: "0 2rem" }}>
        <p className="caption-bb">
          To acheive the goal of onboarding humans from the centralized relam to
          the decentralized dark forest
        </p>
      </Box>
      <Box className="flex-col">
        <Box
          className="flex-alcenter"
        >
          <Trifecta1/>
          <p className="tl">Learn</p>
          <p className="tl">
            and understand crypto in the most easiest way possible with curated
            paths designed in getting you up and running with a solid foundation
            in no time.
          </p>
        </Box>
        <Box
          className="flex-alcenter"
        >
          <Trifecta2/>
          <p className="tl">Learn</p>
          <p className="tl">
            and understand crypto in the most easiest way possible with curated
            paths designed in getting you up and running with a solid foundation
            in no time.
          </p>
        </Box>
        <Box
          className="flex-alcenter"
        >
          <Trifecta3/>
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
