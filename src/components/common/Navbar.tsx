import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import "../../styles/Navbar.css"
import { navBarItems } from "../../data/navBarItems";
import { dropDownItemProps, dropDownTypes } from "../../interfaces/dropdown";
import ColumnDropDown from "../home/ColumnDropDown";
import RowDropDown from "../home/RowDropDown";

interface NavItemProps {
    item: dropDownItemProps;
    hoveredItem: string | null;
    setHoveredItem: (item: string | null) => void;
}

const NavItem = ({ item, hoveredItem, setHoveredItem }: NavItemProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                padding: "0 0.5rem"
            }}
            onMouseEnter={() => {
                setHoveredItem(item.id);
            }}
            onMouseLeave={() => {
                setHoveredItem(null);
            }}
        >
            <Typography
                className="nav-item"
                sx={{
                    color: "#000000"
                }}
            >
                {item.name}
            </Typography>
            {item.subItems &&
                <Box
                    component="img"
                    src="/icons/arrow_down_icon.svg"
                    alt="arrow down"
                    sx={{
                        width: 25,
                        height: 25,
                        paddingTop: 0
                    }}
                />
            }
            {item.subItems && hoveredItem === item.id && item.dropDownType === dropDownTypes.ROW &&
                <RowDropDown item={item} />
            }
            {item.subItems && hoveredItem === item.id && item.dropDownType === dropDownTypes.COLUMN && (
                <ColumnDropDown item={item} />
            )
            }
        </Box>
    )
}

function Navbar() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)
    return (
        // Appbar for navbar
        <AppBar
            sx={{
                position: "sticky"
            }}
        >
            {/* Toolbar is used for styling */}
            <Toolbar
                sx={{
                    backgroundColor: "white",
                    height: "50px",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box
                    sx={{
                        height: "50px"
                    }}
                >
                    <img
                        src="/anurag-logo-2.png.webp"
                        alt="university image"
                        style={{
                            height: "100%",
                            width: "auto" //maintains aspect ratio
                        }}
                    />
                </Box>
                <Toolbar>
                {
                    navBarItems.map((item) => {
                        return (
                            <NavItem item={item} hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} />
                        )
                    })
                }
                </Toolbar>
                <img src="/icons/search_icon.svg" alt="search"/>
            </Toolbar>
        </AppBar >
    )
}

export default Navbar;