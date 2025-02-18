import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./home/Home";
import HowToPlay from "./how-to-play/HowToPlay";
import Category from "./category/Category";
import InGame from "./in-game/InGame";
import ErrorPage from "./in-game/ErrorPage";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/how-to-play", element: <HowToPlay /> },
    { path: "/pick-a-category", element: <Category /> },
    { path: "/game/:category", element: <InGame /> },
    { path: "*", element: <ErrorPage /> },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
