/** @jsxImportSource @emotion/react */

import React from "react";
import NavBar from "../components/NavBar.jsx";
import {Button} from "@mui/material";
import { css } from '@emotion/react'
const Resume = () => {
    return (
        <div>
            <NavBar />
            <a href="public/George_Gottemoeller_Resume.pdf">

            </a>
            <div id="resume-container">
            <embed src="public/George_Gottemoeller_Resume.pdf" type="application/pdf" width="100%" height="100%"/>
                <Button variant="outlined"  css={css`
            position:relative;
            
            color: #14EFD7;
            border-color: #14EFD7;
            &:hover {
                border-color: rgba(20,239,215,0.5);
                color: rgba(24,142,147,0.9)
            }


`}> Download Resume</Button>
            </div>
        </div>
    )
}

export default Resume;