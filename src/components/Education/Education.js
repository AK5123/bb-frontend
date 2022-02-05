import {
  Box,
  Grid,
  useTheme,
  Zoom,
  Link,
  SvgIcon,
  useMediaQuery,
} from "@material-ui/core";
import Trifecta1 from "../../assets/icons/trifecta-1.png";
import Trifecta2 from "../../assets/icons/trifecta-2.png";
import Trifecta3 from "../../assets/icons/trifecta-3.png";

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
        <Box className="flex-alcenter">
          <img
            src={Trifecta1}
            style={{ width: "auto", height: "50%" }}
            alt="Tri1"
            className="small-icon"
          ></img>
          <p className="tl button-text-bb">
            <span>Learn</span>
          </p>
          <p className="tl-2 caption-bb">
            and understand crypto in the most easiest way possible with curated
            paths designed in getting you up and running with a solid foundation
            in no time.
          </p>
        </Box>
        <Box className="flex-alcenter">
          <img
            src={Trifecta2}
            style={{ width: "auto", height: "50%" }}
            alt="Tri1"
            className="small-icon"
          ></img>
          <p className="tl button-text-bb">
            <span>Practice</span>
          </p>
          <p className="tl-2 caption-bb">
            and complete quests to earn XP’s & get practical exposure
            interacting with protocols and projects in a test environment.
            Redeem XP’s for valuable incentives or earn crypto.
          </p>
        </Box>
        <Box className="flex-alcenter">
          <img
            src={Trifecta3}
            style={{ width: "auto", height: "50%" }}
            alt="Tri1"
            className="small-icon"
          ></img>
          <p className="tl button-text-bb">
            <span>Connect</span>
          </p>
          <p className="tl-2 caption-bb">
            and learn with other people in the community who are like-minded and
            passionate as you are. The best way through this dark forest is by
            holding hands and looking out for each other.
          </p>
        </Box>
      </Box>
    </div>
  );
};
export default Education;
