import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import IndiaPackagesPage from "./pages/IndiaPackagesPage";
import IndiaDestinationPage from "./pages/IndiaDestinationPage";
import ServicePage from "./pages/ServicePage";
import VehicleServicesPage from "./pages/VehicleServicesPage";
import InternationalDestinationPage from "./pages/InternationalDestinationPage";
import DataProtectionPage from "./pages/DataProtectionPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import CancellationRefundPolicy from "./pages/CancellationRefundPolicy";
import NotFoundPage from "./pages/NotFoundPage";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/india-packages"
          element={<IndiaPackagesPage />}
        />

        <Route
          path="/india/:slug"
          element={<IndiaDestinationPage />}
        />

        <Route
          path="/international/:slug"
          element={<InternationalDestinationPage />}
        />

        <Route
          path="/services/:slug"
          element={<ServicePage />}
        />

        <Route
          path="/taxi-services"
          element={<VehicleServicesPage />}
        />

        <Route
          path="/privacy-policy"
          element={<DataProtectionPage />}
        />

        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        />

        <Route
          path="/cancellation-and-refund-policy"
          element={<CancellationRefundPolicy />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <WhatsAppButton />
    </>
  );
};

export default App;