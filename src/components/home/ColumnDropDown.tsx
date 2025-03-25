import { Card, CardContent, Typography } from "@mui/material";
import { dropDownItemProps } from "../../interfaces/dropdown";

interface columnDropDownProps {
    item: dropDownItemProps;
}

function ColumnDropDown({ item }: columnDropDownProps) {
    return (
        // CardComponent is used for styling. It arranges its children in a column.
        <Card
            sx={{
                display: "flex",
                position: "absolute",
                top: "100%",
                borderRadius: "5px"
            }}
        >
            {item.subItems && item.subItems.map((subItem) => (
                <Card
                    sx={{
                        width: 250,
                        boxShadow: 0
                    }}
                >
                    <CardContent>
                        <Typography
                            sx={subItem.isHeading ? { fontWeight: "bold" } : {}}
                        >{subItem.name}</Typography>
                        {subItem.subItems && subItem.subItems.map((subSubItem) => (
                            <Typography
                                sx={subSubItem.isHeading ? { fontWeight: "bold" } : {}}
                            >{subSubItem.name}</Typography>
                        ))}
                    </CardContent>
                </Card>
            ))}
        </Card>
    )
}

export default ColumnDropDown;;