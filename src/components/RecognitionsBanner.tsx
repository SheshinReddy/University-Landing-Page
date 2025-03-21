import { Box, IconButtonProps, Typography } from "@mui/material";
import Slider from "react-slick";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function RecognitionsBanner() {
    const banners = [
        {
            imageSource: "https://anurag.edu.in/wp-content/uploads/2023/11/103786-theweek-1.png",
            text: "AAA+ Rating by Careers360 Ranking - 2022 in the Top Private Engineering Institutes Ranking Survey",
        },
        {
            imageSource: "https://anurag.edu.in/wp-content/uploads/2023/11/487ce0f3-53a4-4b5f-83d9-0696b7a7f03b.png",
            text: "92 in Pvt. Engg. Colleges category in India, 55 in South India Engg. - by THE WEEK- Hansa Research Survey 2022",
        },
        {
            imageSource: "https://anurag.edu.in/wp-content/uploads/2023/11/103786-theweek-1.png",
            text: "AAA+ Rating by Careers360 Ranking - 2022 in the Top Private Engineering Institutes Ranking Survey",
        },
        {
            imageSource: "https://anurag.edu.in/wp-content/uploads/2023/11/487ce0f3-53a4-4b5f-83d9-0696b7a7f03b.png",
            text: "92 in Pvt. Engg. Colleges category in India, 55 in South India Engg. - by THE WEEK- Hansa Research Survey 2022",
        },
    ];

    interface ArrowProps extends IconButtonProps {
        onClick?: () => void;
    }

    function LeftArrow(props: ArrowProps) {
        const { onClick } = props
        return (
            <div
                onClick={onClick}
                style={{
                    cursor: "pointer",
                }}
            >
                <ArrowBackIosIcon
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "5px",
                        color: "rgb(0,0,0)",
                        borderRadius: "10px",
                        fontSize: "2rem",
                    }}
                />
            </div>
        )
    }

    function RightArrow(props: ArrowProps) {
        const { onClick } = props;
        return (
            <div onClick={onClick}>
                <ArrowForwardIosIcon
                    sx={{
                        position: "absolute",
                        top: "50%",
                        right: "5px",
                        color: "rgb(0,0,0)",
                        borderRadius: "10px",
                        fontSize: "2rem"
                    }}
                />
            </div>
        )
    }

    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <LeftArrow />,
        nextArrow: <RightArrow />
    }

    return (
        <Box
            className="slider-container"
            sx={{
                width: "80%",
                margin: "auto",
                marginTop: "50px",
                marginBottom: "100px"
            }}
        >
            <Slider {...settings}>
                {banners.map((banner) => (
                    <Box
                        className="banner-container"
                        sx={{
                            display: "flex !important",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "900px"
                        }}
                    >
                        <Box
                            className="image-container"
                            sx={{
                                width: "297px",
                                height: "220px",
                                display: "flex",
                                justifyContent: "center",
                                overflow: "hidden"
                            }}
                        >
                            <img
                                src={banner.imageSource}
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </Box>
                        <Box
                            className="text-container"
                            sx={{
                                width: "60%",
                                paddingLeft: "20px"
                            }}
                        >
                            <Typography
                                sx={{
                                    maxWidth: "100%",
                                    color: "rgb(39, 54, 86)",
                                    fontSize: "26px",
                                    fontWeight: "600"
                                }}
                            >
                                {banner.text}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    )
}

export default RecognitionsBanner;