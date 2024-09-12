import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Spinner from "./Spinner";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <Header />

      <div className="min-h-screen bg-veryLightGray pt-24">
        {isLoading ? <Spinner /> : <Outlet />}
      </div>
    </>
  );
}

export default AppLayout;
