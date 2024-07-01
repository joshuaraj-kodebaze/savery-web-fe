// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar"; // Assuming you have a sidebar component from previous examples
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";

const MainContent = styled("main")({
  flexGrow: 1,
  padding: "50px",
});

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          style={{
            borderBottom: "1px solid #EBEBEB",
            height: 52,
            background: "#ffffff",
            boxShadow: "none",
            zIndex: 2000,
          }}
        >
          <Topbar />
        </AppBar>
        <Sidebar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </MainContent>
      </div>
    </Router>
  );
};

export default App;
