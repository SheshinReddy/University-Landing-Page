import { Box, Typography } from "@mui/material";
import BasicCustomButtonComponent from "./BasicCustomButtonComponent";

function Footer() {
    const buttonSettings = {
        backgroundColor: "rgb(255, 255, 255)",
        color: "rgb(192, 38, 51)",
        fontSize: "18px",
        fontWeight: "700",
        display: "flex",
        jsutifyContent: "center",
        alignItems: "center",
        padding: "10px 20px",
        boxSizing: "border-box",
        border: "0",
        boxShadow: "10px rgb(255,255,0)",
        "&: hover" : {
            transform: "scale(1.1)",
            color: "rgb(0,0,0)"
        }
    }
    return (
        // overall footer container
        <Box>
            {/* banner container */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {/* banner image container */}
                <Box
                    sx={{
                        backgroundImage: "url(https://anurag.edu.in/wp-content/uploads/2023/02/main-footert-bg-img.png)",
                        width: "1140px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        flexDirection: "column",
                        jsutifyContent: "center",
                        alignItems: "center",
                        padding: "120px 0",
                        borderRadius: "10px"
                    }}
                >
                    <Box
                        sx={{
                            marginBottom: "5px",
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                textAlign: "center",
                                color: "rgb(255, 255, 255)",
                                fontFamily: "figtree, sans-serif",
                                fontStyle: "italic",
                                fontWeight: "500",
                                fontSize: "18px",
                            }}
                        >
                            For Building Great Tomorrow for Students
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            marginBottom: "20px",
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                textAlign: "center",
                                color: "rgb(255, 255, 255)",
                                fontFamily: "figtree, sans-serif",
                                fontWeight: "600",
                                fontSize: "40px",
                            }}
                        >
                            Join Anurag University
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            jsutifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <BasicCustomButtonComponent
                            sx={{ ...buttonSettings }}
                            variant="outlined"
                            text="Apply Now"
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;