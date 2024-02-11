import React from 'react'
import img1 from '../../images/naveen_proflie_pic.png';
import "./Menus.css";
import { FcContacts, FcFolder, FcHome } from 'react-icons/fc';
import { FcAbout } from 'react-icons/fc';
import { FcPortraitMode } from 'react-icons/fc'
import { FcBiotech } from 'react-icons/fc';
import { FcReadingEbook } from 'react-icons/fc';
import { Link } from 'react-scroll';


import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Menus = ({ toggle }) => {
    return (
        <>
            {
                toggle ? (
                    <>
                        <Zoom>
                            <div className="navabr-proflie-pic">
                                <img src={img1} alt="profile pic" />
                            </div>
                        </Zoom>
                        <Fade left>
                            <div className="nav-items">
                                <div className="nav-item">
                                    <div className="nav-link">
                                        <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                                            <FcHome />Home
                                        </Link></div>


                                    <div className="nav-link">
                                        <Link to="abou" spy={true} smooth={true} offset={-100} duration={100}>

                                            <FcAbout />About
                                        </Link></div>



                                    <div className="nav-link">
                                        <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>

                                            <FcReadingEbook />Education
                                        </Link></div>


                                    <div className="nav-link">
                                        <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>

                                            <FcBiotech />Tech Stack
                                        </Link></div>



                                    <div className="nav-link">
                                        <Link to="project" spy={true} smooth={true} offset={-100} duration={100}>

                                            <FcFolder />Projects
                                        </Link></div>


                                    <div className="nav-link">
                                        <Link to="work" spy={true} smooth={true} offset={-100} duration={100}>

                                            <FcPortraitMode />Work Experince
                                        </Link></div>

                                    {/* <div className="nav-item">
                            <div className="nav-link">
                                <FcVoicePresentation />Testimonal</div>
                        </div> */}

                                    <div className="nav-link">
                                        <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>

                                            <FcContacts />Contact Me
                                        </Link></div>

                                </div>
                            </div>
                        </Fade>
                    </>
                ) : (<> <Fade left> <div className="nav-items">
                    <div className="nav-item">
                        <div className="nav-link">
                            <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                                <FcHome title="Home" />
                            </Link>
                        </div>


                        <div className="nav-link">
                            <Link to="abou" spy={true} smooth={true} offset={-100} duration={100}>

                                <FcAbout title="About" />
                            </Link>

                        </div>

                        <div className="nav-link">
                            <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>

                                <FcReadingEbook title="Education" />
                            </Link>
                        </div>

                        <div className="nav-link">
                            <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>

                                <FcBiotech title="Tech Stack" />
                            </Link>
                        </div>



                        <div className="nav-link">
                            <Link to="project" spy={true} smooth={true} offset={-100} duration={100}>

                                <FcFolder title="Projects" />
                            </Link>
                        </div>

                        {/* <div className="nav-item">
                            <div className="nav-link">
                                <FcVoicePresentation title="Testimonal" /></div>
                        </div> */}

                        <div className="nav-link">
                            <Link to="work" spy={true} smooth={true} offset={-100} duration={100}>


                                <FcPortraitMode title="Work Experince" />
                            </Link></div>


                        <div className="nav-link">
                            <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>

                                <FcContacts title="Contact" />
                            </Link>
                        </div>

                    </div>
                </div>
                </Fade>
                </>)}
        </>


    )
}

export default Menus