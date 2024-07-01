// Sidebar.js

import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleToggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
        display: open ? "block" : "none",
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem component={Link} to="/">
          <ListItemText primary="HIDDEN BY TOPBAR" />
        </ListItem>
        <ListItem component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem component={Link} to="/About">
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
