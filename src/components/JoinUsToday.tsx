import { Box, Button, Card, CardContent, Typography, useTheme } from "@mui/material";

function JoinUsToday() {
    const theme = useTheme();
    return (
        <Box>
            <Box
                className="video-container"
                sx={{
                    position: "relative",
                    paddingBottom: 0,
                }}
            >
                <video width="100%" autoPlay loop muted>
                    <source src="https://anurag.edu.in/wp-content/uploads/2023/12/anurag-video-tour.mp4" type="video/mp4" />
                    <Typography variant="h2">Video is Loading</Typography>
                </video>
                <Card
                    sx={{
                        position: "absolute",
                        bottom: "0",
                        left: "5%",
                        height: "40%",
                        width: "50%",
                        backgroundColor: "rgba(0,0,0,0.6)",
                    }}
                >
                    <CardContent
                        sx={{
                            color: "white",
                        }}
                    >
                        <Typography variant="h4" fontWeight="bold">Building Bright Futures Since Two Decades</Typography>
                        <Typography variant="body1">Welcome to Anurag University. We are Telangana’s top Private Institution offering multi-disciplinary courses in Engineering, Agricultural Sciences, Pharmacy, Management, Liberal Arts, Medical Sciences and Nursing.</Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    width: "100%",
                    height: "5rem",
                    color: "rgb(255,255,255)",
                    fontWeight: "700",
                    display: "flex",
                    justifyContent: "space-around"
                }}
            >
                <Typography
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        alignContent: "left"
                    }}
                >Join us today</Typography>
                <Box
                    sx={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: theme.palette.secondary.main,
                            boxShadow: "none",
                            color: "rgb(255,255,255)",
                            height: "50%",
                            "&:hover": { backgroundColor: "linear-gradient(90deg,rgb(192,38,51),  rgb(49,52,85))" }
                        }}
                    >
                        Apply Now
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default JoinUsToday;