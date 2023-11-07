// React imports
import { Link } from "react-router-dom";

// MUI imports
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
} from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

// Project imports
// import Logo from "../../assets/logo.png";

// IMPORTANT
// drawerWidth: width in pixels of menu
// Items is an array of menu item objects:
// [{ id: string, path: string including first /, icon: path to icon imported from @mui/icons-material, text: string}]
// example here with icon imported using "import HomeIcon from '@mui/icons-material/Home';" in the parent: [{ id: 'Home', path: '/', icon: <HomeIcon/>, text: 'Home'}]
// END IMPORTANT
export default function PermanentSideNavigationBar({
  drawerWidth = 240,
  items = [],
}) {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="Side bar navigation"
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        <Box
          sx={{ bgcolor: "secondary.main" }}
          style={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <Box style={{ marginBottom: "auto" }}>
            <Toolbar sx={{ bgcolor: "secondary.main" }}>
              <Box
                style={{
                  height: "80px",
                  width: "100%",
                  textAlign: "center",
                  paddingTop: "15px",
                }}
              >
                {/* <img
              style={{ marginTop: "18px", height: "50px" }}
              src={Logo}
              alt="Origin logo"
            /> */}
                Logo Image
              </Box>
            </Toolbar>
            <List>
              {items.map((i) => (
                <ListItem key={i.id} disablePadding>
                  <ListItemButton component={Link} to={i.path}>
                    <ListItemIcon>{i.icon}</ListItemIcon>
                    <ListItemText primary={i.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          {/* Bottom menu items like settings */}
          {/* <div>
        <Divider />
        <List>
          <ListItem key="Settings" disablePadding>
            <ListItemButton component={Link} to="/settings">
              <ListItemIcon>
                <SettingsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </div> */}
        </Box>
      </Drawer>
    </Box>
  );
}
