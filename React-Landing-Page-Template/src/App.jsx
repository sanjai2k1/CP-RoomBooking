import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import "./App.css";
import WithLogin from "./components/WithLogin";
import { useLogin } from "./components/LoginContext";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const {login,showUserDashboard,setShowuserDashboard,showAdminDashboard,setShowadminDashboard} = useLogin()
  useEffect(() => {
    setLandingPageData(JsonData);
    setShowuserDashboard(false)
    setShowadminDashboard(false)
    sessionStorage.clear()
    
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Home} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.rooms} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
