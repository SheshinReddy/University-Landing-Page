import { Box, IconButton } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

function PopUp() {
    const [popUpDisplay, setPopUpDisplay] = useState<boolean>(true);
    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                padding: "5px",
                margin: "auto",
                width: "100vw",
                display: popUpDisplay ? "flex" : "none",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                zIndex: 9999,
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    height: "100vh",
                    overflowY: "auto",
                    width: "60vw"
                }}
            >
                <img
                    src="/Images/pop-up.png"
                    alt="pop up image"
                    style={{
                        maxWidth: "100%",
                        objectFit: "contain",
                    }}
                />
                <IconButton
                    onClick={() => { setPopUpDisplay(false) }}
                    sx={{
                        position: "absolute",
                        right: "10px",
                        top: "10px"
                    }}
                >
                    <CloseIcon
                    />
                </IconButton>
            </Box>

        </Box>
    )
}

export default PopUp;