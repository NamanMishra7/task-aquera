import React from "react";
import HomePage from "./pages/HomePage";
import Planet from "./pages/Planet";
import { useRoutes } from "react-router-dom";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    { path: "planet", element: <Planet /> }
  ]);
};

function App() {
  return <Router />;
}

export default App;
