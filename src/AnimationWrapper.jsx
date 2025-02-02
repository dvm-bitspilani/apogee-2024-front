import { useEffect } from "react";

import App from "@routes/App.jsx";
import Register from "@routes/Register.jsx";
import Events from "@routes/Events.jsx";
import CategoryEvents from "@routes/CategoryEvents.jsx";
import Speakers from "./routes/Speakers";
import ComingSoon from "@routes/ComingSoon.jsx";
import MediaPartners from "@routes/Media-Partners.jsx";
import Sponsors from "@routes/Sponsors.jsx";
import Developers from "@routes/Developers.jsx";

import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import { Route, Routes } from "react-router-dom";
import ReactGa from "react-ga4";
import Armageddon from "./routes/Armageddon";
import Quantaculus from "./routes/Quantaculus";
import QuantaculusSubmitted from "./routes/QuantaculusSubmitted";

export default function AnimationWrapper() {
  // ReactGa.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);
  ReactGa.initialize("G-93KSJ6NXN3");

  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:category" element={<CategoryEvents />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/armageddon" element={<Armageddon />} />
        <Route path="/media-partners" element={<MediaPartners />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/quantaculus" element={<Quantaculus />} />
        <Route path="/quantaculus/submitted" element={<QuantaculusSubmitted />} />
        <Route path="/*" element={<ComingSoon />} />
      </Routes>
    </AnimatePresence>
  );
}
