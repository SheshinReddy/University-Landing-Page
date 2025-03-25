import { Card, CardContent, Typography } from "@mui/material";
import { LifeAtAUCardProps } from "../../interfaces/mainInterfaces";

function LifeAtAUCard ({ item }: { item: LifeAtAUCardProps }) {
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "row",
                // flex: "1 1 calc(50% - 20px)", // Ensures two cards per row with spacing
                flexBasis: "calc(50% - 20px)", 
                height: "230px",
                margin: "10px",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: 3,
                backgroundColor: "white",
                minWidth: "300px"
            }}
        >
            <img
                src={item.imageSource}
                alt={item.heading}
                style={{ width: "40%", objectFit: "cover" }}
            />
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "16px"
                }}
            >
                <Typography fontWeight="500">{item.heading}</Typography>
                <Typography>{item.content}</Typography>
            </CardContent>
        </Card>
    );
}

export default LifeAtAUCard;
