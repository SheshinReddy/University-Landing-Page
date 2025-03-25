import { Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"

function FacilitiesAndServices() {
    const theme = useTheme();

    interface cardContentProps {
        imageSrc: string;
        text: string;
    }

    const cardContent: cardContentProps[] = [
        {
            imageSrc: "https://anurag.edu.in/wp-content/uploads/2023/02/building-icon.png",
            text: "Hostel Accomodation"
        },
        {
            imageSrc: "	https://anurag.edu.in/wp-content/uploads/2023/02/interview.png",
            text: "University Committees"
        },
        {
            imageSrc: "https://anurag.edu.in/wp-content/uploads/2023/02/customer-service.png",
            text: "National Service Scheme"
        },
        {
            imageSrc: "https://anurag.edu.in/wp-content/uploads/2023/02/rank.png",
            text: "National Cadet Corps"
        },
        {
            imageSrc: "https://anurag.edu.in/wp-content/uploads/2023/02/volleyball.png",
            text: "Sports & Fitness Facilities"
        },
        {
            imageSrc: "https://anurag.edu.in/wp-content/uploads/2023/02/bus-1.png",
            text: "Transportation Facilities"
        },
        {
            imageSrc: "https://anurag.edu.in/wp-content/uploads/2023/02/file.png",
            text: "Student Services"
        },
        {
            imageSrc: "https://anurag.edu.in/wp-content/uploads/2023/02/hospital.png",
            text: "Health Center"
        },
    ]
    return (
        // overall component container
        <Box
            sx={{
                width: "100%",
                marginTop: "100px",
                backgroundColor: theme.palette.primary.main,
                display: "flex",
                justifyContent: "center",
            }}
        >
            {/* overall content container */}
            <Box
                sx={{
                    width: "1200px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "100px",
                    gap: "30px"
                }}
            >
                {/* heading container */}
                <Box
                    sx={{
                        // backgroundImage: "-webkit-linear-gradient(113deg, rgb(192, 38, 51) 0%, rgb(255, 255, 255) 100%",
                        // backgroundClip: "text",
                        // WebkitTextFillColor: "transparent",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: "24px",
                            fontStyle: "italic",
                            fontWeight: "600",
                            color: "white",
                            backgroundImage: "-webkit-linear-gradient(113deg, rgb(192, 38, 51) 0%, rgb(255, 255, 255) 100%)",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Facilities and Services
                    </Typography>
                </Box>
                {/* tagline container */}
                <Box
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: "40px",
                            fontWeight: "700",
                            color: "rgb(255, 255, 255)"
                        }}
                    >
                        Everyhting you need to build tomorrow.
                    </Typography>
                </Box>
                {/* grid container */}
                <Box>
                    <Grid
                        container
                        spacing={3}
                    >
                        {
                            cardContent.map((item, index) => (
                                <Grid
                                    key={index}
                                    size={3}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            gap: "10px",
                                            borderRadius: "10px",
                                            border: "1px solid white",
                                            height: "100px",
                                            "&:hover": {
                                                    cursor: "pointer",
                                                    background: `-webkit-linear-gradient(0deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                                                }
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: "20%",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                height: "50px"
                                            }}
                                        >
                                            <img
                                                src={item.imageSrc}
                                                alt="icon"
                                                style={{
                                                    width: "55%",
                                                    height: "auto",
                                                    // objectFit: "cover",
                                                }}
                                            />
                                        </Box>
                                        <Box
                                            sx={{
                                                width: "55%",
                                                display: "flex",
                                                justifyContent: "flex-start",
                                                alignItems: "center",
                                                height: "50px"
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    textWrap: "wrap",
                                                    color: "white",
                                                    transform: "capitalize",
                                                    fontSize: "16px",
                                                    fontWeight: "600"
                                                }}
                                            >
                                                {item.text}
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                width: "25%",
                                                display: "flex",
                                                justifyContent: "flex-end",
                                                alignItems: "flex-start",
                                                height: "50px",
                                                paddingRight: "10px",
                                            }}
                                        >
                                            <ArrowOutwardIcon
                                                sx={{
                                                    color: "rgb(255, 255, 255)",
                                                    fontSize: "20px",
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default FacilitiesAndServices;