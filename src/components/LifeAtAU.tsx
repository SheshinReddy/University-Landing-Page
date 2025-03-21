import { Box, Typography } from "@mui/material"
import TiltImage from "./TiltImage"
import { lifeAtAUCardData } from "../data/mainData"
import LifeAtAUCard from "./LifeAtAUCard"

function LifeAtAU() {
    return (
        <Box
            className="LifeAtAU-container"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "3rem"
            }}
        >
            <Box
                className="LifeAtAU-heading-container"
                sx={{
                    backgroundImage: "-webkit-linear-gradient(99deg, #310069 50%, #C02633 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "2rem",
                    padding: "0 1rem"
                }}
            >
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    fontStyle="italic"
                >Life at AU</Typography>
            </Box>
            <TiltImage />
            <Box>
                <Typography
                    variant="h4"
                    fontWeight="900"
                    sx={{
                        marginTop: "2rem"
                    }}
                >
                    Vibrant. Inclusive. Alive.
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    width: "95%",
                    height: "auto",
                    marginTop:"3rem",
                }}
            >
                {lifeAtAUCardData.map((item, index) => {
                    return (
                        <LifeAtAUCard key={index} item={item}/>
                    )
                })}
            </Box>
        </Box>
    )
}

export default LifeAtAU