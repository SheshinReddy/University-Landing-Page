import { useState } from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";

const TiltImage = () => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width - 0.5) * 20; // Adjusts tilt based on X position
        const y = ((e.clientY - top) / height - 0.5) * -20; // Adjusts tilt based on Y position
        setRotate({ x, y });
    };

    return (
        <Box
            sx={{
                width: "80%",
                perspective: "1000px", // Adds 3D depth
            }}
        >
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setRotate({ x: 0, y: 0 })}
                style={{
                    display: "inline-block",
                    transformStyle: "preserve-3d",
                }}
                animate={{
                    rotateX: rotate.y,
                    rotateY: rotate.x,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
                <img
                    src="/Images/Group-6714.png"
                    alt="image"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                        display: "block",
                    }}
                />
            </motion.div>
        </Box>
    );
};

export default TiltImage;
