import React from "react";
import { NavLink} from "react-router-dom";



const HoverLink = ({ to, children }) => {

    let activeStyle = {
        color: "teal",
    }
    return (
        <NavLink
        to={to}
        style={({isActive}) =>
            isActive ? activeStyle : null

        }
        >
        {children}
        </NavLink>

    );
}

export default HoverLink;