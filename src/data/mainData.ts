import { WhyUsCardProps, WhyUsImageCardProps, LifeAtAUCardProps, TheSchoolsCard } from "../interfaces/mainInterfaces";

export const whyUsCardsData : WhyUsCardProps[] = [
    {
        stat: "10,000 +",
        text: "Bright minds from across the globe."
    },
    {
        stat: "100 +",
        text: "Proficient instructors, boasting top-tier degrees."
    },
    {
        stat: "98 %",
        text: "Success rate in job placement for the year 2022-23."
    },
    {
        stat: "2000 +",
        text: "Coveted job offers from leading global corporations."
    }
]

export const whyUsImageCards: WhyUsImageCardProps[] = [
    {
        imageSource: "/Images/bg-hoome-001.webp",
        heading: "Sculpting Visionaries",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        imageSource: "/Images/bg-hoome-002.webp",
        heading: "Holistic Growth",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        imageSource: "/Images/bg-hoome-003.webp",
        heading: "Dive into discovery",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
]

export const lifeAtAUCardData: LifeAtAUCardProps[] = [
    {
        imageSource: "/Images/clib-bg-img.png",
        heading: "Student Clubs & Communities",
        content: "Explore new worlds with our student clubs! Here, you’ll craft new skills, unite with fellow visionaries, and ignite passions you never knew you had."
    },
    {
        imageSource: "/Images/clib-bg-img.png",
        heading: "Student Clubs & Communities",
        content: "Explore new worlds with our student clubs! Here, you’ll craft new skills, unite with fellow visionaries, and ignite passions you never knew you had."
    },
    {
        imageSource: "/Images/clib-bg-img.png",
        heading: "Student Clubs & Communities",
        content: "Explore new worlds with our student clubs! Here, you’ll craft new skills, unite with fellow visionaries, and ignite passions you never knew you had."
    },
    {
        imageSource: "/Images/clib-bg-img.png",
        heading: "Student Clubs & Communities",
        content: "Explore new worlds with our student clubs! Here, you’ll craft new skills, unite with fellow visionaries, and ignite passions you never knew you had."
    },
]

//export default const is wrong.
export const theSchoolsHeader = {
    heading: "The Schools",
    tagLine: "Driving excellence. Driving tomorrow.",
    text: "Unleash your inner visionary, be it in science, arts, management, or any realm you dream of. Embark into our world of knowledge, and together, let’s shape your future masterpiece."
}

export const theSchoolsCardsInfo: TheSchoolsCard[] = [
    {
        id: "1",
        schoolName: "School of Engineering",
        text: "Anurag University’s School of Engineering is a universe of discovery. We offer comprehensive Undergraduate, Postgraduate, and PhD programs, celebrated by NIRF among others. Our top-tier facilities and expert faculty don’t just educate; they propel students toward success. Here, we engineer dreams into reality.",
        backgroundImage: "https://anurag.edu.in/wp-content/uploads/2023/11/slider-img-1-768x379.jpg",
        stats: [
            { stat: "10", name: "Undergraduate Programs" },
            { stat: "13", name: "Post Graduate Programs" },
            { stat: "2000+", name: "Campus Placements" },
            { stat: "800+", name: "Papers Published" },
            { stat: "160+", name: "MOU Collaborations" },
            { stat: "30+", name: "Funded Projects" },
        ]
    },
    {
        id: "2",
        schoolName: "School of Agriculture",
        text: "The School of Agriculture at Anurag University nurtures the next generation of agricultural pioneers. With a curriculum that blends modern technology and sustainable practices, we empower students to revolutionize the field and ensure food security for the future.",
        backgroundImage: "https://anurag.edu.in/wp-content/uploads/2023/11/slider-img-1-768x379.jpg",
        stats: [
            { stat: "5", name: "Undergraduate Programs" },
            { stat: "3", name: "Post Graduate Programs" },
            { stat: "500+", name: "Research Publications" },
            { stat: "50+", name: "Industry Collaborations" },
            { stat: "20+", name: "Ongoing Research Projects" },
            { stat: "300+", name: "Internship Opportunities" },
        ]
    },
    {
        id: "3",
        schoolName: "School of Management",
        text: "Anurag University’s School of Management transforms aspiring leaders into industry-ready professionals. With a strong focus on experiential learning, global case studies, and corporate tie-ups, we shape individuals into strategic thinkers and dynamic entrepreneurs.",
        backgroundImage: "https://anurag.edu.in/wp-content/uploads/2023/11/slider-img-1-768x379.jpg",
        stats: [
            { stat: "8", name: "Undergraduate Programs" },
            { stat: "5", name: "Post Graduate Programs" },
            { stat: "90%", name: "Placement Rate" },
            { stat: "50+", name: "Industry Experts as Faculty" },
            { stat: "10+", name: "Entrepreneurship Incubators" },
            { stat: "25+", name: "International Tie-ups" },
        ]
    },
    {
        id: "4",
        schoolName: "School of Pharmacy",
        text: "The School of Pharmacy at Anurag University is a hub for pharmaceutical innovation. With cutting-edge research, advanced laboratories, and strong industry partnerships, we equip students to lead the future of healthcare and drug development.",
        backgroundImage: "https://anurag.edu.in/wp-content/uploads/2023/11/slider-img-1-768x379.jpg",
        stats: [
            { stat: "4", name: "Undergraduate Programs" },
            { stat: "6", name: "Post Graduate Programs" },
            { stat: "1000+", name: "Research Publications" },
            { stat: "200+", name: "Pharmaceutical Internships" },
            { stat: "30+", name: "Industry Collaborations" },
            { stat: "15+", name: "Funded Research Projects" },
        ]
    },
    {
        id: "5",
        schoolName: "School of Medical Sciences",
        text: "The School of Medical Sciences at Anurag University is dedicated to shaping the future of healthcare. With a curriculum that integrates clinical training and research, we prepare students for impactful careers in medicine and allied sciences.",
        backgroundImage: "https://anurag.edu.in/wp-content/uploads/2023/11/slider-img-1-768x379.jpg",
        stats: [
            { stat: "6", name: "Undergraduate Programs" },
            { stat: "4", name: "Post Graduate Programs" },
            { stat: "500+", name: "Medical Internships" },
            { stat: "300+", name: "Hospital Tie-ups" },
            { stat: "50+", name: "Community Health Initiatives" },
            { stat: "20+", name: "Cutting-edge Research Projects" },
        ]
    }
];
