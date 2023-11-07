import "./App.css";
import HoldingPage_Component from "./HoldingPage_Component";

// This page uses react-router V6
import { BrowserRouter, Route, Routes } from "react-router-dom";

// This page is currently used to provide structure and layout to the overall site
export default function MainPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HoldingPage_Component />} />
      </Routes>
    </BrowserRouter>
  );
}
