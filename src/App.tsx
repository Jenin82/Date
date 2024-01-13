import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { NotFound } from "./Pages/NotFound/NotFound";
import { Signup } from "./Pages/Registration/Signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/404",
      element: <NotFound />,
    },
    {
      path: "/",
      element: <Navigate to="/signup" replace />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
