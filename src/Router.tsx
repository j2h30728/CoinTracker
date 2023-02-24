import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import baseURL from "./baseURL";
import Chart from "./components/Chart";
import Price from "./components/Price/Price";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    path: `${baseURL}/`,
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":coinId",
        element: <Detail />,
        children: [
          {
            path: "price",
            element: <Price />,
          },
          {
            path: "chart",
            element: <Chart />,
          },
        ],
      },
    ],
  },
]);
export default router;
