import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import SignUpPage from "./Pages/SignUpPage";
import TermsPage from "./Pages/TermsPage";
import { Route, Routes } from "react-router-dom";
import ResetPassword from "./Pages/ResetPassword";
import HomePage from "./Pages/HomePage";
import ServicePage from "./Pages/MotorGarage";
import OTPpage from "./Pages/OTPpage";
import { Toaster } from "react-hot-toast";
import Call from "./Components/Call";
import MotorCycle from "./Pages/MotorCyclePage";
import CalculatorPage from "./Pages/CalculatorPage"
import ServiceCostPage from "./Pages/ServiceCostPage";

function App() {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/term" element={<TermsPage />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/servicepage" element={<ServicePage />} />
        <Route path="/otppage" element={<OTPpage />} />
        <Route path="/login/call" element={<Call/>} />
        <Route path="/motorcycle" element={<MotorCycle/>}/>
        <Route path="/calculator" element={<CalculatorPage/>} />
        <Route path="/servicecost" element={<ServiceCostPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
