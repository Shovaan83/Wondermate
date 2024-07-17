import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignIn from "./Pages/auth/SignIn";
import SignUp from "./Pages/auth/SignUp";
import Tours from "./Pages/Tours";
import UserLayout from "./Layouts/UserLayout";
import Destination from "./Pages/Destination";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<UserLayout />}>
            <Route path="destination" element={<Destination />} />
            <Route path="tours" element={<Tours />} />
          </Route>
        </Routes> 
      </Router>
    </>
  );
}

export default App;