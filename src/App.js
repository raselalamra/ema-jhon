import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Inventory from "./components/Inventory/Inventory";
import Orders from "./components/Oders/Orders";
import Main from "./layout/Main";
// import Header from './components/Header/Header';
// import Home from './components/Home/Home';
import Shop from "./components/Shop/Shop";
import NotFound from "./components/NotFound/NotFound";
import { productsAndCartLoader } from "./loader/productsAndCartLoader";
import Home from "./components/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "/shop",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "/orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>,
        },
        { path: "/inventory", element: <Inventory></Inventory> },
        {
          path: "/about",
          element: <About></About>,
        },
      ],
    },
    { path: "*", element: <NotFound></NotFound> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
