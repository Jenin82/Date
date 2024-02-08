import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { NotFound } from "./Pages/NotFound/NotFound";
import { Signup } from "./Pages/Registration/Signup";
import { Login } from "./Pages/Registration/Login";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Matches } from "./Pages/Matches/Matches";
import { Message } from "./Pages/Message/Message";
import { Profile } from "./Pages/Profile/Profile";
import { GuestPage } from "./Pages/GuestPage/GuestPage";

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
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/match",
      element: <Matches />,
    },
    {
      path: "/message",
      element: <Message />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/guestpage",
      element: <GuestPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
