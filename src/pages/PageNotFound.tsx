import { Box, TextField, Typography } from "@mui/material"
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

function PageNotFound() {
    return (
        <Box>
            <Header/>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "rgb(249, 250, 251)",
                }}
            >
                <Box
                    className="overall-container"
                    sx={{
                        width: "1200px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "30px",
                            padding: "60px",
                            margin: "64px 0",
                            backgroundColor: "rgb(255, 255, 255)",
                        }}
                    >
                        <Box>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: "82px",
                                    fontWeight: "400",
                                    color: "rgb(30, 41, 59)",
                                    textWrap: "wrap",
                                    textAlign: "center",
                                }}
                            >
                                This page doesn't seem to exist.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                variant="h4"
                                sx={{
                                    color: "rgb(10,10,10)",
                                    fontWeight: "500",
                                    fontSize: "24px",
                                    textAlign: "center",
                                }}
                            >
                                It looks like the link pointing here was faulty. Maybe try searching?
                            </Typography>
                        </Box>
                        <Box>
                            <form>
                                <TextField
                                    id="text-field"
                                    variant="outlined"
                                    placeholder="Search ..."
                                    sx={{
                                        backgroundColor: "rgb(250,250,250)",
                                        width: "350px",
                                        "& .MuiOutlinedInput-root.Mui-focused": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                border: "1px dotted rgb(0, 0, 0)"
                                            }
                                        }
                                    }}
                                />
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Footer/>
        </Box>
    )
}

export default PageNotFound;