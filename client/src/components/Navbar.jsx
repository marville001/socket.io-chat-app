import React from "react";

import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Home } from "@mui/icons-material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
          >
            <Home size="large" /> 
          </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            RECHAT MESSANGER
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
