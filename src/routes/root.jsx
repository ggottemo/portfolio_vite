import React from "react";
import NavBar from "../components/NavBar.jsx";
const Root = () => {
    return (
        <div>
            <NavBar />
            <div id="root-container">

            <div id='name-container'>
            <h5 id='hi'>Hi, I'm</h5>
            <h1 id='name'>George Gottemoeller.</h1>
                <h2 id='subhead'>I build cool things with JavaScript, Python and C#.  </h2>

            <div id='summary-container' >
                <p>
                    I'm a full-stack developer with a passion for creating beautiful,
                    functional, and intuitive desktop and web-based applications.
                   I'm always looking for new opportunities to learn and grow as a developer.
                    Lately, I've been interested in learning more about React, Node.js, and how
                    Machine Learning can be used to improve processes and applications.

                </p>
            </div>
            </div>
        </div>
            </div>
    );
};

export default Root;