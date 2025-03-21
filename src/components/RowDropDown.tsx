import { Card, Typography } from "@mui/material";
import { dropDownItemProps } from "../interfaces/dropdown";

function RowDropDown({ item }: { item: dropDownItemProps }) {
    return (
        <Card
            sx={{
                position: "absolute",
                top: "100%",
                padding: "5px"
            }}
            onMouseEnter = {() => {}}
        >
            {item.subItems && item.subItems.map((subItem) => {
                return (
                    <>
                        <Typography key={subItem.id}>{subItem.name}</Typography>                        
                        <img src="/icons/right_arrow.svg" alt="right arrow"/>
                        {/* {subItem.subItems && <RowDropDown item={subItem}/>} */}
                    </>
                )
            })}
        </Card>
    )
}

export default RowDropDown;