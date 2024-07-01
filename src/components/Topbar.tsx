// Home.js

import React from "react";
import SaveryLogo from "../assets/images/savery-logo.png";

const Topbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        color: "black",
        textAlign: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div></div>
      <img src={SaveryLogo} width="94px" height="24px" />
      <div style={{ color: "#CC00FF", fontSize: 14, marginRight: 20 }}>
        Sign in
      </div>
    </div>
  );
};

export default Topbar;
