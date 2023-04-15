import React from "react";
import NavBar from "../components/NavBar.jsx";
import CxFreeze from "../mdx/cx_freeze/CxFreeze.mdx";

//const importModules = import.meta.glob("../mdx/*.mdx", { import:
// "Post" });
const blogs = () => {
  return (
    <div>
      <NavBar />
      <div id="blogs-container">
        <CxFreeze />
      </div>
    </div>
  );
};

export default blogs;
