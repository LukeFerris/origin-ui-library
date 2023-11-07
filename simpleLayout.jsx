import "./App.css";
import HoldingPage_Component from "./HoldingPage_Component";

// IMPORTANT DO NOT CHANGE
// This page uses react-router V6 which does not have Switch
import { BrowserRouter, Route, Routes } from "react-router-dom";
// END IMPORTANT

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
