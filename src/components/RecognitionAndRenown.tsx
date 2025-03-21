import { Box, Card, Typography, useTheme } from "@mui/material"
import RecognitionsBanner from "./RecognitionsBanner";

function RecognitionAndRenown() {
    const content = [
        {
            source: "/Images/NBA_Accreditation.png",
            alt: "NBA Accreditation",
            text: "NBA Accreditation"
        },
        {
            source: "/Images/NAAC_Accreditation.png",
            alt: "NAAC Accreditation",
            text: "NAAC 'A' Accreditation"
        },
        {
            source: "/Images/UGC.png",
            alt: "UGC Autonomous",
            text: "UGC Autonomous"
        },
    ]

    const theme = useTheme()
    return (
        <>
            <Box
                sx={{
                    height: "500px",
                    width: "100%",
                    backgroundColor: theme.palette.primary.main,
                    position: "relative",
                    marginTop: "150px",
                }}
            >
                <Box
                    className="image-container"
                    sx={{
                        width: "fit-content",
                        position: "absolute",
                        top: "-100px",
                        left: "100px",
                    }}
                >
                    <img
                        src="/Images/nirf-rank.png"
                    />
                </Box>
                <Box
                    className="content-container"
                    sx={{
                        width: "100%",
                        position: "absolute",
                        top: "150px",
                        padding: "15px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            width: "492px"
                        }}
                    >
                        <Box
                            className="heading-container"
                            sx={{
                                width: "fit-content"
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    background: `-webkit-linear-gradient(0, white ,${theme.palette.secondary.main})`,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    fontStyle: "italic",
                                }}
                            >
                                Recognition. Renown.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                variant="h3"
                                color="white"
                                sx={{

                                }}
                            >
                                Accreditations
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                color="white"
                                sx={{
                                    fontFamily: '"Figtree", Sans-serif',
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    fontStyle: "normal"
                                }}
                            >
                                Enter a realm where creativity ignites excellence at Anurag University. Home to the illustrious NAAC “A” honour and a beacon in India’s NIRF top 150, we’re a cradle of greatness recognised by AICTE, TCS, and JNTU(H). Here, horizons are limitless, and dreams are the seeds of reality. Embrace the canvas where your brightest colours come alive.
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        className="images-container"
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "20px"
                        }}
                    >
                        {content.map((item) => (
                            <Card
                                sx={{
                                    height: "160px",
                                    width: "180px",
                                    borderRadius: "10px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <img src={item.source} alt={item.alt} />
                                <Typography
                                    sx={{
                                        fontFamily: '"Figtree", Sans-serif',
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        fontStyle: "normal",
                                        color: "rgb(62, 62, 62)"
                                    }}
                                >
                                    {item.text}
                                </Typography>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Box>
            <RecognitionsBanner />
        </>
    )
}

export default RecognitionAndRenown;