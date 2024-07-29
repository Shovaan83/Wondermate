import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignIn from "./Pages/auth/SignIn";
import SignUp from "./Pages/auth/SignUp";
import Tours from "./Pages/Tours";
import UserLayout from "./Layouts/UserLayout";
import Destination from "./Pages/Destination";
import TravelPackages from "./Pages/TravelPackages";
import Hotels from "./Pages/Hotels";
import HotelPages from "./Pages/InsidePages/HotelPages";
import UserProfile from "./Pages/UserProfile";
import ProfileEdit from "./Components/ProfileEdit";
import DashBoardLayout from "./Layouts/DashBoardLayout.jsx";
import ManageHotel from "./Pages/DashBoard/ManageHotel.jsx";
import ManageTravelPackages from "./Pages/DashBoard/ManageTravelPackages.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user" element={<UserLayout />}>
          <Route path="destination" element={<Destination />} />
          <Route path="tours" element={<Tours />} />
          <Route path="travelPackages" element={<TravelPackages />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="hotels/:id" element={<HotelPages />} />
          <Route path="userprofile" element={<UserProfile />} />
        </Route>
        <Route path="/user/editprofile" element={<ProfileEdit />} />
        <Route path="/dashboard" element={<DashBoardLayout />}>
          <Route path="manage-hotels" element={<ManageHotel />} />
          <Route path="manage-packages" element={<ManageTravelPackages />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
