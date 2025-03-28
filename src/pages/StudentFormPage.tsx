import { Box, TextField, Typography } from "@mui/material";
import { GlobalStyles, styled } from '@mui/system';

function StudentFormPage() {
    const StyledTextField = styled(TextField)({
        height: "40px",
        "& .MuiOutlinedInput-root": {
            height: "inherit",
        },
    })

    const StyledTypographyLabel = styled(Typography)({
        fontSize: "14px",
    })

    return (
        <>
            <GlobalStyles styles={{ body: { margin: 0, padding: 0 } }} />
            <Box
                sx={{
                    backgroundImage: "url(https://admissions.anurag.edu.in/wp-content/uploads/2025/02/cover-bg.jpg)",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                    height: "1000px", //temporary value, it should be autoz
                }}
            >
                <Box
                    sx={{
                        width: "400px",
                        backgroundColor: "rgb(255, 255, 255)",
                        padding: "10px",
                        position: "absolute",
                        right: "10%",
                        top: "10%",
                        borderRadius: "5px",
                    }}
                >
                    <form
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        <Box>
                            <StyledTypographyLabel>
                                First Name <span style={{ color: "red" }}>*</span>
                            </StyledTypographyLabel>
                            <StyledTextField
                                fullWidth
                            />
                        </Box>
                        <Box>
                            <StyledTypographyLabel>
                                Last Name <span style={{ color: "red" }}>*</span>
                            </StyledTypographyLabel>
                            <StyledTextField
                                fullWidth
                            />
                        </Box>
                        <Box>
                            <StyledTypographyLabel>
                                E-mail ID <span style={{ color: "red" }}>*</span>
                            </StyledTypographyLabel>
                            <StyledTextField
                                fullWidth
                            />
                        </Box>
                        <Box>
                            <StyledTypographyLabel>
                                Mobile Number <span style={{ color: "red" }}>*</span>
                            </StyledTypographyLabel>
                            <StyledTextField
                                fullWidth
                            />
                        </Box>
                        <Box>
                            <StyledTypographyLabel>
                                Date of Birth(as per SSC) <span style={{ color: "red" }}>*</span>
                            </StyledTypographyLabel>
                            <StyledTextField
                                fullWidth
                            />
                        </Box>
                        <Box>
                            <StyledTypographyLabel>
                                Preferred Program <span style={{ color: "red" }}>*</span>
                            </StyledTypographyLabel>
                            <StyledTextField
                                fullWidth
                            />
                        </Box>
                    </form>
                </Box>
            </Box>
        </>
    )
}

export default StudentFormPage;