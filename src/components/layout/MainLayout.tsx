
// import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar/Navbar";
// import Footer from "./Footer/Footer";

// function MainLayout() {
//   return (
//     <>
//       <Navbar />

//       <Outlet />

//       <Footer />

//     </>
//   );
// }

// export default MainLayout;

import Home from "../../pages/Home";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />

      <Home />

      <Footer />
    </>
  );
}

export default MainLayout;