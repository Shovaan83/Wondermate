import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage.jsx";
import SignUp from "./Components/SignUp.jsx";
import SignIn from "./Components/SignIn.jsx";
import Tours from "./Components/Tours.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Tours" element={<Tours />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
