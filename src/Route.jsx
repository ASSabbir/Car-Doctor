import { createBrowserRouter } from "react-router-dom";
import Root from "./componets/Main/Root";
import Home from "./componets/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]

    },
  ]);

  export default router