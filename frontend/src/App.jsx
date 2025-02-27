import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import StartupProfile from "./pages/StartupProfile";
import InvestorProfile from "./pages/InvestorProfile";
import ChatPage from "./pages/ChatPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
       <Route path="/startup-profile" element={<StartupProfile />} />
       <Route path="/investor-profile" element={<InvestorProfile />} />
       <Route path= "chat" element={<ChatPage conversationId={"N5ZGvScSMLKQl1Oltweh"} currentUserId={"adsfsdfase"}/>} />
      </Routes>
    </Router>
  );
}

export default App;
