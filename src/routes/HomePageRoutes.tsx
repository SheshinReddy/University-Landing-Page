import { createBrowserRouter } from "react-router-dom";
import SchoolsPage from "../pages/SchoolsPage";
import RedirectHandler from "./RedirectsHandler";
import PageNotFound from "../pages/PageNotFound";
import LandingPage from "../pages/LandingPage";
import StudentFormPage from "../pages/StudentFormPage";

export const homePageRouter = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage/>,
    },
    {
        path: "/schools/",
        element: <SchoolsPage/>
    },
    {
        path: "*",
        element: <RedirectHandler/>
    },
    {
        path: "/student-form",
        element: <StudentFormPage/>
    },
    {
        path: "/page-not-found/",
        element: <PageNotFound/>
    }
]);