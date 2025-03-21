import { Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

interface ButtonProps {
    sx?: object;
    variant?: "contained" | "outlined" | "text";
    text?: string;
}

function BasicCustomButtonComponent({ sx, variant, text }: ButtonProps) {

    return (
        <Button
            variant={variant}
            sx={sx}
        >
            {text}
            <ArrowOutwardIcon
                sx={{
                    marginLeft: "5px"
                }}
            />
        </Button>
    )
}

export default BasicCustomButtonComponent;