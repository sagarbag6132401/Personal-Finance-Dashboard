import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  AppBar,
  Typography,
  CssBaseline,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export default function LeftsideNavbar() {
  const navigate = useNavigate();
  const navItems = ["Home", "About", "Contact"];
  const [open, setOpen] = useState(false);

  const handleNavItemClick = (navItem: string) => {
    const navLink = navItem === "Home" ? "/" : `/${navItem.toLowerCase()}`;
    navigate(navLink);
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Top Navbar */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Finance Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {navItems.map((text) => (
              <ListItem
                onClick={() => handleNavItemClick(text)}
                key={text}
                disablePadding
              >
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> 
        <Outlet />
      </Box>
    </Box>
  );
}
