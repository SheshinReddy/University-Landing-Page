import { Box, Typography } from "@mui/material"
import Slider from "react-slick";
import { CSSProperties } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Collaborations() {
    const content = [
        {
            imageURL: "https://anurag.edu.in/wp-content/uploads/2025/01/Neelima.png",
            linkURL: "https://neelimamed.com/"
        },
        {
            imageURL: "https://anurag.edu.in/wp-content/uploads/2025/01/Bachelors.png",
            linkURL: "https://anurag.edu.in/au-asu-bachelors/?utm_source=website&utm_medium=homepage&utm_campaign=organic"
        },
        {
            imageURL: "https://anurag.edu.in/wp-content/uploads/2025/01/Masters.png",
            linkURL: "https://anurag.edu.in/au-asu?utm_source=website&utm_medium=homepage&utm_campaign=organic"
        },
    ];

    interface ArrowProps {
        onClick?: () => void;
    };

    const arrowProps: CSSProperties =  {
        position: "absolute",
        bottom: "-33px",
        zIndex: 999,
    }

    function PrevArrow({ onClick }: ArrowProps) {
        return (
            <div
                onClick={onClick}
                style={{
                    left: "42%",
                    ...arrowProps
                }}
            >
                <ArrowBackIosIcon />
            </div>
        )
    }

    function NextArrow({ onClick }: ArrowProps) {
        return (
            <div
                onClick={onClick}
                style={{
                    right: "42%",
                    ...arrowProps
                }}
            >
                <ArrowForwardIosIcon />
            </div>
        )
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    }

    return (
        <Box
            className="collaborations-parent-box"
            sx={{
                width: "90%",
                margin: "auto",
                marginTop: "100px",
                marginBottom: "100px",
                display: "flex",
                justifyContent: "center"
            }}
        >
            <Box
            >
                <Box
                    className="our-container"
                    sx={{
                        backgroundImage: "-webkit-linear-gradient(99deg, rgb(49,0,105) 50%, rgb(192, 38, 51) 100%)",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        minWidth: "720px",
                        maxWidth: "1120px",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            color: "rgb(10,10,10)",
                            fontSize: "24px",
                            fontWeight: "600",
                            fontStyle: "italic"
                        }}
                    >
                        Our
                    </Typography>
                </Box>
                <Box
                    sx={{
                        minWidth: "720px",
                        maxWidth: "1120px",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            color: "rgb(10,10,10)",
                            fontSize: "40px",
                            fontWeight: "700"
                        }}
                    >
                        University Collaborations
                    </Typography>
                </Box>
                <Box
                    sx={{
                        position: "relative",
                        minWidth: "720px",
                        maxWidth: "1120px",
                    }}
                >
                    <Slider {...sliderSettings}>
                        {content.map((item) => (
                            <Box
                                sx={{
                                    height: "520px",
                                    minWidth: "720px",
                                    maxWidth: "1120px",
                                    margin: "auto",
                                }}
                            >
                                <img
                                    src={item.imageURL}
                                    alt="collaborations"
                                    style={{
                                        width: "100%",
                                        objectFit: "contain"
                                    }}
                                />
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Box>
        </Box>
    )
}

export default Collaborations;