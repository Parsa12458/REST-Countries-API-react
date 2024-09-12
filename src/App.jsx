import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Homepage, { loader as homepageLoader } from "./Homepage";
import CountryDetail, { loader as countryDetailLoader } from "./CountryDetail";
import AppLayout from "./AppLayout";
import Error from "./Error";
import { CountriesProvider } from "./CountriesContext";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Navigate to="/region/all" />,
        },
        {
          path: "/region/:region",
          element: <Homepage />,
          loader: homepageLoader,
          errorElement: <Error />,
        },
        {
          path: "/search/:searchValue",
          element: <Homepage />,
          loader: homepageLoader,
          errorElement: <Error />,
        },
        {
          path: "/country/:countryCode",
          element: <CountryDetail />,
          loader: countryDetailLoader,
          errorElement: <Error />,
        },
      ],
    },
  ]);

  return (
    <CountriesProvider>
      <RouterProvider router={router} />
    </CountriesProvider>
  );
}

export default App;
