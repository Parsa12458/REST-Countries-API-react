import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Homepage";
import CountryDetail from "./CountryDetail";
import AppLayout from "./AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/:countryId",
          element: <CountryDetail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
