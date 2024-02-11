import React, { useState } from 'react'
import './MobileNav.css'
import { ImMenu3, ImMenu4 } from 'react-icons/im';
import { FcContacts, FcFolder, FcHome } from 'react-icons/fc';
import { FcAbout } from 'react-icons/fc';
import { FcPortraitMode } from 'react-icons/fc'
import { FcBiotech } from 'react-icons/fc';
import { FcReadingEbook } from 'react-icons/fc';
import { Link } from 'react-scroll';

const MobileNav = () => {
    const [open, setOpen] = useState(false);
    //handle open
    const handleOpen = () => {
        setOpen(!open);
    };


    //handle menu click
    const handleMenuClick = () => {
        setOpen(false);
    }
    return (
        <>

            <div className="mobile-nav">
                <div className="mobile-nav-header">
                    {open ? (<ImMenu4 size={40} className="moblie-nav-icon" onClick={handleOpen} />) : (<ImMenu3 size={40} className="moblie-nav-icon" onClick={handleOpen} />)}

                    <span className="mobile-nav-title">My Portfolio App</span>

                </div>

                {open && (

                    <div className="mobile-nav-menu">
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link to="home" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                        <FcHome />Home
                                    </Link></div>


                                <div className="nav-link">
                                    <Link to="abou" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>

                                        <FcAbout />About
                                    </Link></div>



                                <div className="nav-link">
                                    <Link to="education" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>

                                        <FcReadingEbook />Education
                                    </Link></div>


                                <div className="nav-link">
                                    <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>

                                        <FcBiotech />Tech Stack
                                    </Link></div>



                                <div className="nav-link">
                                    <Link to="project" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>

                                        <FcFolder />Projects
                                    </Link></div>


                                <div className="nav-link">
                                    <Link to="work" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>

                                        <FcPortraitMode />Work Experince
                                    </Link></div>

                                {/* <div className="nav-item">
                            <div className="nav-link">
                                <FcVoicePresentation />Testimonal</div>
                        </div> */}

                                <div className="nav-link">
                                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>

                                        <FcContacts />Contact Me
                                    </Link></div>

                            </div>
                        </div>

                    </div>
                )}

            </div>

        </>
    )
}

export default MobileNav