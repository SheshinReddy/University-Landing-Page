
import { useNavigate, useLocation } from "react-router-dom";
import { homePageRouter } from "./HomePageRoutes";
import { useEffect } from "react";

// const RedirectHandler = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const partialToFullMapping: Record<string, string> = {
//       "/scho": "/scholarly-output",
//       "/admi": "/admissions",
//       "/cont": "/contact",
//     };

//     const matchedPath = Object.keys(partialToFullMapping).find((partial) =>
//       location.pathname.startsWith(partial)
//     );

//     if (matchedPath) {
//       navigate(partialToFullMapping[matchedPath], { replace: true });
//     }
//   }, [location, navigate]);

//   return null; // No UI, just handling redirection
// };

const RedirectHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const paths = homePageRouter.routes.map(route => route.path);
    paths.map((path) => {
      if (path?.startsWith(location.pathname)) {
        navigate(path);
      } else {
        navigate("/page-not-found/")
      }
    })
  })

  return null;
}

export default RedirectHandler;
