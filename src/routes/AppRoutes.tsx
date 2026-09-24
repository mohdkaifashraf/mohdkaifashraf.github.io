// import { HashRouter, Routes, Route } from "react-router-dom";
// import MainLayout from "../components/layout/MainLayout";
// import Home from "../pages/Home";

// function AppRoutes() {
//   return (
//     <HashRouter>
//       <Routes>
//         <Route element={<MainLayout />}>
//           <Route path="/" element={<Home />} />
//         </Route>
//       </Routes>
//     </HashRouter>
//   );
// }

// export default AppRoutes;
import MainLayout from "../components/layout/MainLayout";

function AppRoutes() {
  return <MainLayout />;
}

export default AppRoutes;
