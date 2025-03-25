import { useState } from "react";
import { TheSchoolCardStats, TheSchoolsCard } from "../../interfaces/mainInterfaces";
import { Box, Typography } from "@mui/material";
import { theSchoolsCardsInfo } from "../../data/mainData";

interface CompressedCardProp {
    schoolInfo: TheSchoolsCard
    setHovered: (id: string | null) => void
}

function ExpandedCard({ schoolInfo }: { schoolInfo: TheSchoolsCard }) {
    return (
        <Box
            sx={{
                backgroundImage: `url(${schoolInfo.backgroundImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                width: "60%",
                height: "420px",
                borderRadius: "36px",
                padding: "30px 20px",
                boxSizing: "border-box",
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    color: "white"
                }}
            >
                {schoolInfo.schoolName}
            </Typography>
            <Typography
                sx={{
                    color: "white",
                    fontSize: "0.7rem",
                }}
            >
                {schoolInfo.text}
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 4,
                }}
            >
                {schoolInfo.stats &&
                    schoolInfo.stats.map((statInfo) => (
                        <ExpandedStatCard statInfo={statInfo} />
                    ))
                }
            </Box>
        </Box>
    )
}

function ExpandedStatCard({ statInfo }: { statInfo: TheSchoolCardStats }) {
    return (
        <Box
            sx={{
                background: "transparent",
                display: "flex",
                flexDirection: "column",
                minWidth: "250px",
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    color: "white"
                }}
            >
                {statInfo.stat}
            </Typography>
            <Typography
                sx={{
                    color: "white",
                    fontSize: "0.8rem"
                }}
            >
                {statInfo.name}
            </Typography>
        </Box>
    )
}

function CompressedCard({ schoolInfo, setHovered }: CompressedCardProp) {
    return (
        <Box
            className="compressed-text-container"
            onMouseEnter={() => setHovered(schoolInfo.id)}
            sx={{
                height: "420px",
                backgroundImage: `url(${schoolInfo.backgroundImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                transition: "flex 1s ease-in-out",
                width: "6%",
                borderRadius: "36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography
                sx={{
                    transform: "rotate(-90deg)",
                    color: "white",
                    width: "max-content",
                    padding: "3px"
                }}
            >
                {schoolInfo.schoolName}
            </Typography>
        </Box>
    )
}

function TheSchoolsCards() {
    const [hovered, setHovered] = useState<string | null>("1")
    return (
        <Box
            sx={{
                width: "90%",
                margin: "auto",
                display: "flex",
                flexDirection: "row",
                gap: 2,
                justifyContent: "space-even",
            }}
        >
            {theSchoolsCardsInfo.map((school) => {
                if (school.id === hovered) {
                    return (
                        <ExpandedCard key={school.id} schoolInfo={school} />
                    )
                }
                else {
                    return (
                        <CompressedCard key={school.id} schoolInfo={school} setHovered={setHovered} />
                    )
                }
            })}
        </Box>
    )
}

export default TheSchoolsCards;