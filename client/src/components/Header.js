import React from "react";
import NewShare from "./NewShare";
import "./Header.css";

const Header = ({ handleFormClick }) => {
  return (
    <div class="header">
      <h2 class="h2">MSM Shares</h2>
      <NewShare handleFormClick={handleFormClick} />
    </div>
  );
};

export default Header;
