import React from 'react'
import { Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { css} from '@emotion/react'
import HoverLink from './HoverLink'
const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__left'>

            <HoverLink to={'/'}>About</HoverLink>
            <HoverLink to={'/blogs'}>Blogs</HoverLink>
            <HoverLink to={'/resume'}>Resume</HoverLink>
            <Link target='#' onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:george.gottemoeller@gmail.com";}
            }>Contact</Link>
            </div>
            <div className='navbar__right'>
            <a href="https://www.github.com/ggottemo" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/george-gottemoeller/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
        </div>
    )
}

export default NavBar