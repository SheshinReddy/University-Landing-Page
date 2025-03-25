import { Box, Typography, useTheme } from "@mui/material"
import BasicCustomButtonComponent from "../common/BasicCustomButtonComponent";
import Grid from "@mui/material/Grid2"

function Research() {
    const theme = useTheme();

    const buttonSettings = {
        backgroundColor: theme.palette.secondary.main,
        height: "50px",
        color: "rgb(255, 255, 255)",
        fontWeight: "700",
        borderRadius: "5px",
        padding: "15px 30px",
        fontSize: "18px",
        "&:hover": {
            background: "linear-gradient(90deg,rgb(192,38,51),  rgb(49,52,85))",
            transform: "scale(1.1)",
            transition: "0.2s ease-in-out"
        }
    }

    const cardButtonSettings = {
        width: "auto",
        backgroundColor: "rgb(255, 255, 255)",
        color: "rgb(192, 38, 51)",
        fontSize: "14px",
        fontWeight: "500",
        padding: "10px, 25px",
        borderRadius: "5px",
        "&:hover": {
            color: "rgb(0,0,0)",
            transform: "scale(1.1)",
            transition: "0.2s ease-in-out"
        }
    }

    interface contentProps {
        stat: string;
        text: string;
    }

    const cardContent: contentProps[] = [
        {
            stat: "1500 +",
            text: "Citations"
        },
        {
            stat: "100 +",
            text: "Articles"
        },
        {
            stat: "140 +",
            text: "MOU collaborations"
        },
        {
            stat: "180 +",
            text: "Funded Projects"
        },
        {
            stat: "150 +",
            text: "Consultancy Projects"
        },
        {
            stat: "5 Cr+",
            text: "Research Grants"
        },
    ]

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            {/* component for text above card */}
            <Box
                sx={{
                    width: "1200px",
                    margin: "auto",
                    marginTop: "100px",
                    display: "flex",

                }}
            >
                {/* component for text */}
                <Box
                    sx={{
                        width: "80%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start"
                    }}
                >
                    <Box
                        className="heading-container"
                        sx={{
                            backgroundImage: "-webkit-linear-gradient(99deg, #310069 50%, #C02633 100%)",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            marginBottom: "5px"
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontSize: "24px",
                                fontStyle: "italic",
                                fontWeight: "600"
                            }}
                        >
                            Research at AU
                        </Typography>
                    </Box>

                    {/* component for tag line */}
                    <Box
                        sx={{
                            marginBottom: "20px",
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: "40px",
                                fontWeight: "700",
                            }}
                        >
                            Pushing boundaries. Pushing possibilities.
                        </Typography>
                    </Box>

                    {/* component for content*/}
                    <Box>
                        <Typography
                            sx={{
                                color: "rgb(62, 62, 62)",
                                fontFamily: "Figtree, sans-serif",
                                fontWeight: "500",
                                fontSize: "16px",
                                paddingRight: "15%",
                                marginBottom: "5px",
                            }}
                        >
                            At Anurag University, we’re fueled by a passion for exploring new ideas and groundbreaking discoveries. With our best-in-class research centres and dedicated subject matter experts, we’re crafting the future of Research and Development.
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        width: "20%",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}
                >
                    <BasicCustomButtonComponent
                        sx={buttonSettings}
                        variant="contained"
                        text="View More"
                    />
                </Box>
            </Box>

            {/* component for overall card */}
            <Box
                sx={{
                    backgroundImage: "url(https://anurag.edu.in/wp-content/uploads/2023/12/anurag-university-img-bg.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "20px",
                    width: "1200px",
                    padding: "80px 50px",
                }}
            >
                {/* component for the card content */}
                <Box
                    sx={{
                        width: "40%",
                        padding: "10px",
                    }}
                >
                    <Box
                        sx={{
                            paddingBottom: "20px",
                        }}
                    >
                        <Grid container>
                            {cardContent.map((item, index) => (
                                <Grid size={6}>
                                    <Box
                                        key={index}
                                        sx={{
                                            margin: "10px",
                                            paddingBottom: "20px",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: "rgb(255,255,255)",
                                                fontFamily: "'Figtree', sans-serif",
                                                fontSize: "36px",
                                                fontWeight: "600",
                                            }}
                                        >
                                            {item.stat}</Typography>
                                        <Typography
                                            sx={{
                                                color: "rgba(255,255,255, 0.68)",
                                                fontFamily: "'Figtree', sans-serif",
                                                fontSize: "14px",
                                                fontWeight: "700",
                                            }}
                                        >
                                            {item.text}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* footer box component  */}
                    <Box
                        sx={{
                            borderRadius: "10px",
                            border: "solid 1px rgb(255,255,255)",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "0 10px",
                            margin: "1px",
                        }}
                    >
                        {/* text within footer */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                aignItems: "flex-start",
                                justifyContent: "center",
                                padding: "10px",
                                marginRight: "10%",
                            }}
                        >
                            <Box>
                                <Typography
                                    sx={{
                                        fontFamily: "Figtree, sans-serif",
                                        fontSize: "36px",
                                        fontWeight: "600",
                                        color: "rgb(255, 255, 255)"
                                    }}
                                >
                                    20
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{
                                        fontFamily: "Figtree, sans-serif",
                                        fontSize: "14px",
                                        fontWeight: "700",
                                        color: "rgba(255, 255, 255, 0.68)"
                                    }}
                                >
                                    Research Centres
                                </Typography>
                            </Box>
                        </Box>

                        {/* button in footer */}
                        <Box
                            sx={{
                                fontSize: "14px",
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                padding: "10px 10px 10x 0",
                            }}
                        >
                            <BasicCustomButtonComponent
                                sx={cardButtonSettings}
                                variant="contained"
                                text="View More"
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Research;