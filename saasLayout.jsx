import { Box, Toolbar } from "@mui/material";
import { Routes, Route } from "react-router-dom";
const drawerWidth = 240;

export default function SaaSLayoutContainer() {
  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      [MENU COMPONENT GOES HERE IF REQUIRED]
      <Box
        component="main"
        sx={{
          SideNavigationBarGrow: 1,
          display: "flex",
          flexDirection: "column",
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          padding: "0px",
        }}
      >
        <Toolbar />
        <div style={{ padding: "20px", flexGrow: 1, overflow: "hidden" }}>
          <Routes>{/* <Route index element={<New_Component />} /> */}</Routes>
        </div>
      </Box>
    </Box>
  );
}
