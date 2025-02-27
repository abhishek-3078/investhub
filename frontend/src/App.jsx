import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterStartup from "./pages/RegisterStartup";
import RegisterInvestor from "./pages/RegisterInvestor";
import LoginInvestor from "./pages/LoginInvestor";
import LoginStartup from "./pages/LoginStartup";
import StartupProfile from "./pages/StartupProfile";
import InvestorProfile from "./pages/InvestorProfile";
import ChatPage from "./pages/ChatPage";
import LandingPage from "./pages/LandingPage";import StartupSearch from "./pages/StartupSearch";
import InvestorSearch from "./pages/InvestorSearch";
import StartupDetailsForm from "./pages/StartupDetailsForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
       <Route path="/startup-profile" element={<StartupProfile />} />
       <Route path="/investor-profile" element={<InvestorProfile />} />
       <Route gitpath= "chat" element={<ChatPage conversationId={"N5ZGvScSMLKQl1Oltweh"} currentUserId={"adsfsdfase"}/>} />
        <Route path="/signup/startup" element={<RegisterStartup />} />
        <Route path="/signup/investor" element={<RegisterInvestor />} />
        <Route path="/login/startup" element={<LoginStartup />} />
        <Route path="/login/investor" element={<LoginInvestor />} />
       <Route path='/startup-search' element={<StartupSearch />} />
       <Route path='/investor-search' element={<InvestorSearch />} />
       <Route path='/startup-details-form' element={<StartupDetailsForm />} />
      </Routes>
    </Router>
  );
}

export default App;
