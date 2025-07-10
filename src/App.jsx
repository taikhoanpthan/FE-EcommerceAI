import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./layout/Layout";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Favorites from "./pages/favorites/Favorites";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product/:id",
          element: <ProductDetail />,
        }, {
          path: "/favorites",
          element: <Favorites />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
