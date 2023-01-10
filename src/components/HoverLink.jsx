import React from "react";
import { NavLink} from "react-router-dom";



const HoverLink = ({ to, children }) => {

    let activeStyle = {
        color: "lightblue",
        display: "inline-block",
    }
    return (
        <NavLink
        to={to}
        style={({isActive}) =>
            isActive ? activeStyle : null

        }
        className="hover-link"
        >
        {children}
        </NavLink>

    );
}

export default HoverLink;