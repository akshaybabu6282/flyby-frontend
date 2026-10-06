import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import IndiaPackagesPage from "./pages/IndiaPackagesPage";
import ServicePage from "./pages/ServicePage";
import VehicleServicesPage from "./pages/VehicleServicesPage";
import DataProtectionPage from "./pages/DataProtectionPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import CancellationRefundPolicy from "./pages/CancellationRefundPolicy";
import WhatsAppButton from "./components/WhatsAppButton";
import NotFoundPage from "./pages/NotFoundPage";

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