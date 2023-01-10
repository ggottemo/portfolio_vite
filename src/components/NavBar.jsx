import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { css} from '@emotion/react'
import HoverLink from './HoverLink'
import Menu from '@mui/icons-material/Menu';

const NavBar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className={open ? "navbar open" : "navbar"}>



            <Menu onClick={ () => {
                const prev = open
                setOpen(!open)

                document.getElementById('root-container').style.filter = prev ? 'blur(0px)' : 'blur(5px)'
                self.className = !prev ? 'navbar open' : 'navbar'
                console.log(open)
            }} className="menu-icon" />


             <div className="navbar-container">

            <HoverLink to={'/'}>About</HoverLink>
            <HoverLink to={'/blogs'}>Blogs</HoverLink>
            <HoverLink to={'/resume'}>Resume</HoverLink>
            <Link id="contact" target='#' onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:george.gottemoeller@gmail.com";}
            }>Contact</Link>
             </div>
            <div className="social-icons">

            <a href="https://www.github.com/ggottemo" target="_blank" rel="noreferrer"><GitHubIcon width="30px"/></a>
            <a href="https://www.linkedin.com/in/george-gottemoeller/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>

        </div>
    )
}

export default NavBar