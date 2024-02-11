import React from 'react'
import './About.css'
import img1 from '../../images/naveenpp2.jpg'
import Jump from 'react-reveal/Jump';

const About = () => {
    return (
        <>
            <Jump>
                <div id="abou" className="about">
                    <div className="row">
                        <div className="col-md-6  col-xl-6 col-lg-6 col-xs-12 about-img">
                            <img src={img1} alt="profile_pic" />
                        </div>
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12  about-content ">
                            <h1>About Me</h1>
                            <p>


                                Hello there! I'm Naveen, a passionate and enthusiastic student pursuing a B.Tech degree in Computer Science Engineering. As a fresher and aspiring Frontend Developer, MERN Developer, React Native Developer, and Programmer, I am constantly seeking opportunities to learn, grow, and create exciting projects that make a positive impact.

                                As a Frontend Developer, I take pride in crafting visually stunning and user-friendly interfaces that elevate the user experience. Proficient in HTML, CSS, and JavaScript.
                                {/* <p>
                            MERN Stack Enthusiast

                            The power of MERN (MongoDB, Express.js, React, and Node.js) stack has always intrigued me. With a strong foundation in these technologies, I can develop robust and scalable web applications that bring ideas to life.
                        </p> */}

                                Continuous Learning
                                I am a team player, enjoying the collaborative process of brainstorming and contributing to a dynamic team environment.
                                I am excited to embark on a journey where I can leverage my skills and contribute to meaningful projects. Whether you have an exciting opportunity, a project idea, or just want to connect, feel free to reach out! Let's collaborate and build something exceptional together. </p>
                            <p>Thank you for visiting my portfolio website, and I look forward to hearing from you!
                            </p>
                        </div>
                    </div>
                </div>
            </Jump>

        </>
    )
}

export default About