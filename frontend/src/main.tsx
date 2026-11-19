import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import HomePage from "@/pages/applicant/Home.tsx";
import LowonganPage from "./pages/applicant/Lowongan";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lowongan-pekerjaan" element={<LowonganPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
