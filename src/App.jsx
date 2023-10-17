import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Components/PageComponents/Main";
import Home from "./Components/PageComponents/Home/Home";
import About from "./Components/PageComponents/About";
import Blog from "./Components/PageComponents/Blog";

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
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
