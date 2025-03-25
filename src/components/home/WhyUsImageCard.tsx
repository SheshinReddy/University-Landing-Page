import { Box, Card, CardContent, Typography } from "@mui/material";
import { WhyUsImageCardProps } from "../../interfaces/mainInterfaces";

function WhyUsImageCard({ imageSource, heading, content }: WhyUsImageCardProps) {
    return (
        <Card
            sx={{
                width: "350px",
                height: "350px",
                backgroundImage: `url(${imageSource})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                overflow: "hidden"
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    backgroundColor: "rgba(0,0,0,0.5)"
                }}
            />
            <CardContent
                sx={{
                    color: "rgb(255, 255, 255)",
                    position: "absolute",
                    bottom: "0",
                    zIndex: 1,
                }}
            >
                <Typography
                    fontWeight="900"
                >
                    {heading}
                </Typography>
                <Typography>
                    {content}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default WhyUsImageCard;