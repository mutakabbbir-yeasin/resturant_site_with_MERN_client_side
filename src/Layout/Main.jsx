import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  // const currentLocation = useLocation();
  // console.log(currentLocation);
  const isLogging = location.pathname.includes("login");
  return (
    <div>
      {isLogging || <Navbar></Navbar>}
      <Outlet></Outlet>
      {isLogging || <Footer></Footer>}
    </div>
  );
};

export default Main;
