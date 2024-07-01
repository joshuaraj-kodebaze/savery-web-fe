// Home.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home page!</p>
      <h3>How to use font-awesome in react</h3>
      <FontAwesomeIcon icon={faPenNib} />
      <FontAwesomeIcon icon={faEnvelope} />
    </div>
  );
};

export default Home;
