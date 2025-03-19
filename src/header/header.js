import React, { useState } from "react";
import { 
  AppBar, Toolbar, Typography, InputBase, Button, Avatar, Box, IconButton, Menu, MenuItem 
} from "@mui/material";
import { Search as SearchIcon, Menu as MenuIcon } from "@mui/icons-material";
import { useMediaQuery, useTheme } from "@mui/material";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect small screens

  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar 
      position="static" 
      sx={{ backgroundColor: "white", color: "black", boxShadow: "none", borderBottom: "1px solid #ddd" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        {/* Left Section - Logo and Navigation */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "blue" }}>
            Find Jobs
          </Typography>
          
          {/* Show navigation links only on larger screens */}
          {!isMobile && (
            <>
              {["Top Companies", "Job Tracker", "My Calendar", "Documents", "Messages", "Notifications"].map((text) => (
                <Typography key={text} variant="body2" sx={{ cursor: "pointer", "&:hover": { color: "blue" } }}>
                  {text}
                </Typography>
              ))}
            </>
          )}

          {/* Show menu icon only on mobile */}
          {isMobile && (
            <>
              <IconButton onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                {["Top Companies", "Job Tracker", "My Calendar", "Documents", "Messages", "Notifications"].map((text) => (
                  <MenuItem key={text} onClick={handleMenuClose}>{text}</MenuItem>
                ))}
              </Menu>
            </>
          )}
        </Box>

        {/* Middle Section - Search Bar (Hidden on mobile) */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#f1f3f4", borderRadius: 2, px: 1, py: 0.5 }}>
            <SearchIcon sx={{ color: "gray" }} />
            <InputBase placeholder="Search" sx={{ ml: 1, flex: 1 }} />
          </Box>
        )}

        {/* Right Section - Resume Builder Button & Profile */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {!isMobile && (
            <Button variant="contained" color="primary" sx={{ textTransform: "none" }}>
              Resume Builder
            </Button>
          )}
          <Avatar src="https://via.placeholder.com/40" />
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
