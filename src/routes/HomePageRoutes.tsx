import { createBrowserRouter } from "react-router-dom";
import App from "../App" ;
import SchoolsPage from "../pages/SchoolsPage";

export const homePageRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/schools/",
        element: <SchoolsPage/>
    }
]);