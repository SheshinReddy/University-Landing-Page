import { Box, Typography, useTheme } from "@mui/material";
import { whyUsCardsData } from "../data/mainData";
import WhyUsCard from "./WhyUsCard";
import WhyUsCarousel from "./WhyUsCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function WhyUs() {
    const theme = useTheme();
    return (
        <Box
            className="why-us-container"
            sx={{
                width: "90%",
                margin: "auto",
                paddingTop: "3rem",
            }}
        >
            <Box
                sx={{
                    width: "fit-content"
                }}
            >
                <Typography
                    variant="h4"
                    fontSize="2rem"
                    fontWeight="bold"
                    fontStyle="italic"
                    sx={{
                        // background: "-webkit-linear-gradient(180deg, #310069 50%, #C02633 100%)",
                        background: `-webkit-linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        paddingRight: "7px"
                    }}
                >
                    Why study at
                </Typography>
            </Box>
            <Typography
                variant="h3"
                fontWeight="bold"
            // fontSize="2rem"
            >
                Anurag University
            </Typography>
            <Typography
                sx={{
                    paddingTop: "1.5rem"
                }}
            >
                At Anurag University, we’re focused on creating industry-ready graduates who are more than ready to enter the workforce. Our innovative methodologies like a world-class finishing school and partnerships with core companies and research institutes help groom students to be self-sufficient individuals who are well-rounded in the truest sense. You walk out of Anurag, not just with a degree but with accomplishments and life skills to make the world a better place.
            </Typography>
            <Box
                display="flex"
            >
                {whyUsCardsData.map((item) => {
                    return (
                        <WhyUsCard stat={item.stat} text={item.text} />
                    )
                })}
            </Box>
            <Box
            >
                <WhyUsCarousel />
            </Box>
        </Box>
    )
}

export default WhyUs;