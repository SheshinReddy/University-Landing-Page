import { Card, CardContent, Typography } from "@mui/material";
import { WhyUsCardProps } from "../interfaces/mainInterfaces";

function WhyUsCard({ stat, text }: WhyUsCardProps) {
    return (
        <Card
            sx={{
                width: "25%",
                height: "auto",
                border: "0",
                boxShadow: "0",                
            }}
        >
            <CardContent>
                {/* for some reason <CardHeader> is not working properly */}
                <Typography
                    variant="h3"
                    sx={{
                        background: "-webkit-linear-gradient(103deg, #310069 0%, #C02633 60%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "rgb(255, 255, 255)"
                    }}
                >   
                    {stat}
                </Typography>

                <Typography
                >
                    {text}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default WhyUsCard;