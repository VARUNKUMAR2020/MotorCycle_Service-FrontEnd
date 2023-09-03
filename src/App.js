import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import SignUpPage from "./Pages/SignUpPage";
import TermsPage from "./Pages/TermsPage"
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/term" element={<TermsPage/>} />
      </Routes>
     
    </div>
  );
}

export default App;
