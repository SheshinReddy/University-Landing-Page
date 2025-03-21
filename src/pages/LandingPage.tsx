import Header from "../components/Header";
import JoinUsToday from "../components/JoinUsToday";
import LifeAtAU from "../components/LifeAtAU";
import WhyUs from "../components/WhyUs";
import TheSchools from "../components/TheSchools";
// import PopUp from "../components/PopUp";
import RecognitionAndRenown from "../components/RecognitionAndRenown";
import Collaborations from "../components/Collaborations"
import Promise from "../components/Promise"
import Success from "../components/Success"
import { Box } from "@mui/material"
import Research from "../components/Research"
import FacilitiesAndServices from "../components/FacilitiesAndServices"
import Testimonials from "../components/Testimonials";

function LandingPage() {
    return (
        <Box>
            <Header />
            <JoinUsToday />
            <WhyUs />
            <RecognitionAndRenown />
            <TheSchools />
            <Collaborations />
            <Promise />
            <Success />
            <LifeAtAU />
            <Research/>
            <FacilitiesAndServices/>
            <Testimonials/>
            {/* <PopUp/> */}
        </Box>
    )
}

export default LandingPage;