import "../styles/App.css";

// react routes
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import components
import Main from "./Main";
import Test from "./Test";
import Thanks from "./Thanks";
import Testing from "./Testing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },

  {
    path: "/test",
    element: <Test></Test>,
  },

  {
    path: "/thanks",
    element: <Thanks></Thanks>,
  },

  {
    path: "/testing",
    element: <Testing></Testing>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
