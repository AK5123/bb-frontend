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
      <Box sx={{ width: "100%", padding: "2rem", marginTop: "5rem" }}>
        <p className="subtitle-bb">
          The <span>Trifecta</span> education
        </p>
      </Box>
      <Box sx={{ width: "100%", marginBottom: "3rem", padding: "0 2rem" }}>
        <p className="caption-bb">
          To achieve the goal of onboarding humans from Web2 to Web3
        </p>
      </Box>
      <Box className="flex-col">
        <Box className="flex-alcenter">
          <img src={Trifecta1} alt="Tri1" className="trifectaImage"></img>
          <p className="tl button-text-bb">
            <span>Learn</span>
          </p>
          <p className="tl-2 caption-bb">
            and understand, blockchain, cryptocurrency, DAO, NFT, Metaverse and
            much more in the easiest way possible with curated paths designed to
            get you up to speed in no time.
          </p>
        </Box>
        <Box className="flex-alcenter">
          <img src={Trifecta2} alt="Tri1" className="trifectaImage"></img>
          <p className="tl button-text-bb">
            <span>Practice</span>
          </p>
          <p className="tl-2 caption-bb">
            and complete quests and challenges to earn XP’s while getting
            practical exposure. Redeem XP’s for valuable incentives and earning
            crypto.
          </p>
        </Box>
        <Box className="flex-alcenter">
          <img src={Trifecta3} alt="Tri1" className="trifectaImage"></img>
          <p className="tl button-text-bb">
            <span>Connect</span>
          </p>
          <p className="tl-2 caption-bb">
            with like minded people, grow in community, find your co-founders or
            team members from our pool. The best way to get through the dark
            first is through holding hands and looking out for each other.
          </p>
        </Box>
      </Box>
    </div>
  );
};
export default Education;
