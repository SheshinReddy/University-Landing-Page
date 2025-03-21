import { Box, Typography, useTheme } from "@mui/material";
import BasicCustomButtonComponent from "./BasicCustomButtonComponent";
import Slider from "react-slick";

function Testimonials() {
    const theme = useTheme();

    const buttonSettings = {
        backgroundColor: theme.palette.secondary.main,
        height: "50px",
        color: "rgb(255, 255, 255)",
        fontWeight: "700",
        borderRadius: "5px",
        padding: "15px 30px",
        fontSize: "18px",
        "&:hover": {
            background: "linear-gradient(90deg,rgb(192,38,51),  rgb(49,52,85))",
            transform: "scale(1.1)",
            transition: "0.2s ease-in-out"
        }
    }

    interface CardContentProps {
        imageSrc: string;
        name: string,
        qualification: string,
        text: string,
    }

    const cardContent: CardContentProps[] = [
        {
            imageSrc: "https://anurag.edu.in/wp-content/uploads/2023/11/0.png",
            name: "Karthik Nagpuri",
            qualification: "B Tech(AI) - IV Year",
            text: "At Anurag, I experienced a 360-degree learning environment that fostered my skills through active club and academic activities. It's a space for innovators, creators, and future business leaders. Anurag helped me discover my potential and strike a balance between fun and personal growth. I love the green campus, digital library, and the dynamic community. It's all about the purposeful culture, making me proud to be an Anuragian."
        },
        {
            imageSrc: "	https://anurag.edu.in/wp-content/uploads/2023/11/0-1.png",
            name: "Ashitha Francis",
            qualification: "Pharma.D - III Year",
            text: "I'm Ashitha Francis, a National Level Shooter, thanks to my family and Anurag University, my second home. Introduced to Rifle and Pistol Shooting by my dad during my 1st year of graduation, I've achieved significant milestones in Pistol Shooting during my 3rd year, including a 4th position at the State Level and 35th at the National Qualifying Championship in 2022. Anurag's unwavering support for co-curricular and extra-curricular activities empowers Anuragians to lead a balanced, enriched life."
        },
    ]

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "100px"
            }}
        >
            {/* component for text */}
            <Box
                sx={{
                    width: "1200px",
                    marginTop: "100px",
                    display: "flex",

                }}
            >
                {/* component for heading */}
                <Box
                    sx={{
                        width: "80%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start"
                    }}
                >
                    <Box
                        className="heading-container"
                        sx={{
                            backgroundImage: "-webkit-linear-gradient(99deg, #310069 50%, #C02633 100%)",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            marginBottom: "5px"
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontSize: "24px",
                                fontStyle: "italic",
                                fontWeight: "600"
                            }}
                        >
                            Testimonials
                        </Typography>
                    </Box>

                    {/* component for tag line */}
                    <Box
                        sx={{
                            marginBottom: "20px",
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: "40px",
                                fontWeight: "700",
                            }}
                        >
                            Straight from those who are making tomorrow.
                        </Typography>
                    </Box>

                    {/* component for content*/}
                    <Box>
                        <Typography
                            sx={{
                                color: "rgb(62, 62, 62)",
                                fontFamily: "Figtree, sans-serif",
                                fontWeight: "500",
                                fontSize: "16px",
                                paddingRight: "15%",
                                marginBottom: "5px",
                            }}
                        >
                            Education isn’t just about knowing stuff. At Anurag, we see education as the starting point for something bigger. We think every student has a world of capability inside them. Our mission is to help you uncover that potential. This way, you won’t just be prepared for what’s ahead – you’ll be prepared to shape it.
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        width: "20%",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}
                >
                    <BasicCustomButtonComponent
                        sx={buttonSettings}
                        variant="contained"
                        text="View More"
                    />
                </Box>
            </Box>

            {/* component for slider */}
            <Box
                className="slider-container-element"
                sx={{
                    width: "1200px",
                }}
            >
                <Slider className="slider-element" {...sliderSettings}>
                    {cardContent.map((item, index) => (
                        <Box
                            id="single-card-container"
                            key={index}
                            sx={{
                                width: "600px",
                                height: "350px",
                                display: "flex !important",
                                flexDirection: "row",
                            }}
                        >
                            {/* component for image */}
                            <Box
                                id = "image-container"
                                sx={{
                                    width: "200px",
                                    height: "100%"
                                }}
                            >
                                <img
                                    src={item.imageSrc}
                                    alt={item.name}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>
                            {/* component for content */}
                            <Box
                                id = "content-container"
                                sx={{
                                    width: "350px"
                                }}
                            >
                                <Box>
                                    <Typography>
                                        {item.text}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Box>
                                        <Typography>
                                            {item.name}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography>
                                            {item.qualification}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Slider>
            </Box>

        </Box>
    )
}

export default Testimonials;