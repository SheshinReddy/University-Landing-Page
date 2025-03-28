import { RouterProvider } from "react-router-dom";
import { homePageRouter } from "./routes/HomePageRoutes";
import './index.css'

function App() {
  return <RouterProvider router={homePageRouter} />;
}

export default App;
