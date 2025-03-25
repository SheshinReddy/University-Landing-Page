import { Box, Button, Typography } from "@mui/material";
import { theSchoolsHeader } from "../../data/mainData";

function TheSchoolsHeader() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                padding: "1rem",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "Column",
                    justifyContent: "flex-start",
                }}
            >
                <Box
                    sx={{
                        backgroundImage: "-webkit-linear-gradient(99deg, #310069 50%, #C02633 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontStyle: "italic",
                        paddingRight: "3px",

                    }}
                >
                    <Typography
                        variant="h5"
                    >
                        {theSchoolsHeader.heading}
                    </Typography>
                </Box>
                <Typography
                    variant="h3"
                >
                    {theSchoolsHeader.tagLine}
                </Typography>
                <Typography
                    sx={{
                        paddingTop: "15px",
                        color: "#3E3E3E"
                    }}
                >
                    {theSchoolsHeader.text}
                </Typography>
            </Box>
            <Box
                sx={{
                    width: "40%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Button
                    variant="text"
                    sx={{
                        backgroundColor: "rgb(192,38,51)",
                        color: "white",
                        width: "50%",
                        height: "50px",
                        borderRadius: "5px",
                        textTransform: "none",
                        fontSize: "1.1rem"
                    }}
                >
                    View Schools
                </Button>
            </Box>
        </Box>
    )
}

export default TheSchoolsHeader;