import JoinUsToday from "../components/home/JoinUsToday";
import LifeAtAU from "../components/home/LifeAtAU";
import WhyUs from "../components/home/WhyUs";
import TheSchools from "../components/home/TheSchools";
// import PopUp from "../components/PopUp";
import RecognitionAndRenown from "../components/home/RecognitionAndRenown";
import Collaborations from "../components/home/Collaborations"
import Promise from "../components/home/Promise"
import Success from "../components/home/Success"
import { Box, GlobalStyles } from "@mui/material"
import Research from "../components/home/Research"
import FacilitiesAndServices from "../components/home/FacilitiesAndServices"
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

function LandingPage() {
    return (
        <Box>
            <GlobalStyles styles={{ body: {margin: "0", overflowX: "hidden"}}}/>
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
            <Footer/>
            {/* <PopUp/> */}
        </Box>
    )
}

export default LandingPage;