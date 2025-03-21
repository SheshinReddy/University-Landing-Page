import { Box } from "@mui/material";
import { whyUsImageCards } from "../data/mainData";
import WhyUsImageCard from "./WhyUsImageCard";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 3, // Number of cards visible at a time
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
    customPaging: () => (
        <Box
          sx={{
            width: "30px",
            height: "6px",
            backgroundColor: "black",
            borderRadius: "10px",
            display: "inline-block"
          }}
        />
      ),
      dotsClass: "slick-dots custom-dots"
};

function WhyUsCarousel() {
    return (
        <Box sx={{ width: "100%", padding: "20px" }}>
            <Slider {...settings}>
                {whyUsImageCards.map((item, index) => {
                    console.log("in here")
                    console.log("Array length:", whyUsImageCards.length);
                    return (
                        <WhyUsImageCard
                            key={index}
                            imageSource={item.imageSource}
                            heading={item.heading}
                            content={item.content}
                        />
                    )
                })}
            </Slider>
        </Box>
    );
}

export default WhyUsCarousel;
