import { createBrowserRouter } from "react-router-dom";
import SchoolsPage from "../pages/SchoolsPage";
import RedirectHandler from "./RedirectsHandler";
import PageNotFound from "../pages/PageNotFound";
import LandingPage from "../pages/LandingPage";

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
        path: "/page-not-found/",
        element: <PageNotFound/>
    }
]);