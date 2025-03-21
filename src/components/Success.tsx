import { Box, Typography, useTheme } from "@mui/material"
import Grid from "@mui/material/Grid2"
import BasicCustomButtonComponent from "./BasicCustomButtonComponent";

function Success() {

    const theme = useTheme();

    interface ContentType {
        iconSource: string
        text: string
        subText: string
    }

    const content: ContentType[] = [
        {
            iconSource: "https://anurag.edu.in/wp-content/uploads/2023/02/d2b1a690996b27cec588ce114d4bdec8.svg",
            text: "2000 +",
            subText: "Dream Jobs Unlocked!"
        },
        {
            iconSource: "https://anurag.edu.in/wp-content/uploads/2023/02/f392c179708c35d8dd2ff80b387e05c4.svg",
            text: "150 +",
            subText: "LEADING RECRUITERS CHOOSE US!"
        },
        {
            iconSource: "https://anurag.edu.in/wp-content/uploads/2023/02/11ed9817eb2eea4427349f86a5b94c2f.svg",
            text: "Peak Earning?",
            subText: "A WHOPPING 38.5 LPA!"
        },
        {
            iconSource: "https://anurag.edu.in/wp-content/uploads/2023/02/1b9825165dedbecb9b1f54ff77e3d440.svg",
            text: "Median Earning?",
            subText: "A SOLID 4.73 LPA!"
        },
        {
            iconSource: "https://anurag.edu.in/wp-content/uploads/2023/02/17f2717cf632d12e9e1b776516997acf.svg",
            text: "1700 +",
            subText: "STELLAR OFFERS ABOVE 4 LPA!"
        },
        {
            iconSource: "https://anurag.edu.in/wp-content/uploads/2023/02/649fcc412f049cd3e3ec875fee5fb7ec.svg",
            text: "2300 +",
            subText: "ADVENTUROUS INTERNSHIP JOURNEYS!"
        },
    ]

    const buttonStyle = {
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

    return (
        <Box
            sx={{
                backgroundImage: "url(https://anurag.edu.in/wp-content/uploads/2023/05/students-bg.jpg)",
                height: "737px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "60px"
            }}
        >
            < Box
                sx={{
                    width: "1140px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }
                }
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "rgb(255, 255, 255)",
                        marginBottom: "20px",
                        width: "1120px",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: "40px",
                            fontWeight: "700",
                            textAlign: "center"
                        }}
                    >
                        A Snapshot of Success (2022-2023)
                    </Typography>
                </Box>
            </Box >
            <Box
                sx={{
                    width: "1120px",
                }}
            >
                <Grid
                    container
                >
                    {content.map((item, index) => (
                        <Grid
                            key={index}
                            size={4}
                            sx={{
                                margin: "30px 0"
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: "transparent",
                                    boxShadow: "0",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyCOntent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <Box>
                                    <img src={item.iconSource}>
                                    </img>
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: "40px",
                                        fontWeight: "700",
                                        color: "rgb(255, 255, 255)"
                                    }}
                                >
                                    {item.text}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "16px",
                                        color: "rgba(255, 255, 255, 0.7)",
                                        textTransform: "uppercase"
                                    }}
                                >
                                    {item.subText}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <BasicCustomButtonComponent sx={buttonStyle} variant="outlined" text="View Report"/>
        </Box >
    )
}

export default Success;