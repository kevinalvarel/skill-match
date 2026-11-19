import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export default function ApplicantLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
