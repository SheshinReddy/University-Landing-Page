import { Box, Typography } from "@mui/material";

function Promise() {
    return (
        <Box
            sx={{
                backgroundColor: "rgb(39, 54, 86)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "50px",
                paddingTop: "100px",
                marginTop: "100px"
            }}
        >
            <Box
                sx={{
                    width: "1140px",
                    padding: "10px",
                }}
            >
                <Typography
                    variant="h2"
                    sx={{   
                        textAlign: "center",
                        fontSize: "120px",
                        fontWeight: "900",
                        backgroundImage: "-webkit-linear-gradient(100deg, #C02633 10%, #ffffff 120%)",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        marginBottom: "5px",
                        width: "100%",
                    }}
                >
                    100% Promise
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        color: "rgb(255,255,255)",
                        fontSize: "40px",
                        fontFamily: "'Figtree', sans-serif",
                        fontWeight: "600",
                        textAlign: "center",
                        width: "100%",
                    }}
                >
                    Every Journey at Anurag Leads to Opportunity!
                </Typography>
            </Box>
        </Box>
    )
}

export default Promise;