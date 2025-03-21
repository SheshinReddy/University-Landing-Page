export interface dropDownItemProps {
    id: string;
    name: string;
    subItems?: dropDownItemProps[];
    isHeading?: boolean;
    dropDownType? : dropDownTypes;
}

export enum dropDownTypes {
    COLUMN  = "column",
    ROW = "row"
}