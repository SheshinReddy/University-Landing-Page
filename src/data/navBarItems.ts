import { dropDownItemProps, dropDownTypes } from "../interfaces/dropdown";

export const navBarItems: dropDownItemProps[] = [
    {
        id: "1",
        name: "About Us",
        dropDownType: dropDownTypes.ROW,
        subItems: [
            {
                id: "1.1",
                name: "Foundation",
                dropDownType: dropDownTypes.ROW,
                subItems: [
                    { id: "1.1.1", name: "Governing Body" },
                    { id: "1.1.2", name: "Board of Management" },
                    { id: "1.1.3", name: "Academic Council" },
                    { id: "1.1.4", name: "Trust" },
                    { id: "1.1.5", name: "Statutes & Ordinances" }
                ]
            },
            {
                id: "1.2",
                name: "Vision & Mission",
            },
            { id: "1.3", name: "Accreditation" },
            { id: "1.4", name: "Rankings & Awards" },
            { id: "1.5", name: "Leadership" },
            { id: "1.6", name: "Policies" }
        ]
    },
    {
        id: "2",
        name: "Academics",
        dropDownType: dropDownTypes.COLUMN,
        subItems: [
            {
                id: "2.1",
                name: "Schools",
                isHeading: true,
                subItems: [
                    { id: "2.1.1", name: "School of Engineering" },
                    { id: "2.1.2", name: "School of Agriculture" },
                    { id: "2.1.3", name: "School of Management" },
                    { id: "2.1.4", name: "School of Pharmacy" },
                    { id: "2.1.5", name: "School of Medical Sciences" },
                    { id: "2.1.6", name: "School of Nursing" },
                    { id: "2.1.7", name: "Anurag University International College" }
                ]
            },
            {
                id: "2.2",
                name: "Programs",
                isHeading: true,
                subItems: [
                    { id: "2.2.1", name: "Undergraduate (UG)" },
                    { id: "2.2.2", name: "Postgraduate (PG)" },
                    { id: "2.2.3", name: "Doctorate (Ph.D)" },
                ]
            },
            {
                id: "2.3",
                name: "Important Links",
                isHeading: true,
                subItems: [
                    { id: "2.3.1", name: "Academic Calendar" },
                    { id: "2.3.2", name: "Academic Regulations" },
                    { id: "2.3.3", name: "Library" },
                    { id: "2.3.4", name: "Quality Assurance" },
                ]
            }
        ]
    },
    {
        id: "3",
        name: "Discover",
    },
    {
        id: "4",
        name: "Admissions",
    },
    {
        id: "5",
        name: "Examinations",
    },
    {
        id: "6",
        name: "Placements",
    },
    {
        id: "7",
        name: "Research",
    }
];