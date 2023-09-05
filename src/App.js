import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import SignUpPage from "./Pages/SignUpPage";
import TermsPage from "./Pages/TermsPage"
import { Route, Routes } from "react-router-dom";
import ResetPassword from "./Pages/ResetPassword";
import HomePage from "./Pages/HomePage";
import ServicePage from "./Pages/ServicePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/royalenfield" element={<HomePage/>}/>
        <Route path="/" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/term" element={<TermsPage/>} />
        <Route path="/resetPassword" element={<ResetPassword/>}/>
        <Route path="/servicepage" element={<ServicePage/>} />
      </Routes>
     
    </div>
  );
}

export default App;
