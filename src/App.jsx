import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Components/PageComponents/Main";
import Home from "./Components/PageComponents/Home/Home";
import About from "./Components/PageComponents/About";
import Blog from "./Components/PageComponents/Blog";
import Forum from "./Components/PageComponents/Forum";
import Group from "./Components/PageComponents/Group";
import Marketplace from "./Components/PageComponents/Marketplace";
import Coaching from "./Components/PageComponents/Coaching";
import Jobs from "./Components/PageComponents/Jobs";
import Course from "./Components/PageComponents/Course";
import Login from "./Components/PageComponents/Login";
import Signup from "./Components/PageComponents/Signup";
import PrivateRoute from "./Components/Utility/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/forum",
          element: (
            <PrivateRoute>
              <Forum></Forum>
            </PrivateRoute>
          ),
        },
        {
          path: "/group",
          element: (
            <PrivateRoute>
              <Group></Group>
            </PrivateRoute>
          ),
        },
        {
          path: "/market",
          element: (
            <PrivateRoute>
              <Marketplace></Marketplace>
            </PrivateRoute>
          ),
        },
        {
          path: "/coaching",
          element: (
            <PrivateRoute>
              <Coaching></Coaching>
            </PrivateRoute>
          ),
        },
        {
          path: "/jobs",
          element: (
            <PrivateRoute>
              <Jobs></Jobs>
            </PrivateRoute>
          ),
        },
        {
          path: "/course",
          element: (
            <PrivateRoute>
              <Course></Course>
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/register",
      element: <Signup></Signup>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
