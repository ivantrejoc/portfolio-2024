import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { PageNotFound } from "../pages/PageNotFound";

function Router() {
    return useRoutes([
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/*",
        element: <PageNotFound />
      }
    ])
  }
  
  export default Router
  