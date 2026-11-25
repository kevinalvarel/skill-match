import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import HomePage from "@/pages/(applicant)/home";
import LowonganPage from "@/pages/(applicant)/lowongan";
import ApplicantLayout from "@/pages/(applicant)/layouts/ApplicantLayout";
import NotFoundPage from "@/pages/_not-found";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route element={<ApplicantLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/lowongan-kerja" element={<LowonganPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
