import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import HomePage from "@/pages/(applicant)/home";
import LowonganPage from "./pages/(applicant)/lowongan";
import ApplicantLayout from "./pages/(applicant)/layouts/ApplicantLayout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<ApplicantLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/lowongan-pekerjaan" element={<LowonganPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
