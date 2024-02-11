import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import './Home.css';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/updated resume naveen.pdf';

import { BsFillMoonFill, BsSun } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';

const Home = () => {
    const [theme, setTheme] = useTheme();
    //handle theme
    const handleTheme = () => {
        setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
    };

    return (
        <>
            <div className="container-fluid home-container">
                <div className="theme-btn" onClick={handleTheme}>
                    {theme === 'light' ? (<BsFillMoonFill size={30} />) : (<BsSun size={30} />)}

                </div>
                <div className="container home-content">
                    <Fade right>   <h2>Hi👋 I'm a</h2>
                        <h1>
                            <Typewriter
                                options={{
                                    strings: ['FrontEnd Developer!', 'Mern Stack Developer!', 'React Native Developer!'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1> </Fade>
                    <Fade bottom >
                        <div className="home-buttons">
                            <a className="btn btn-hire " href="https://api.whatsapp.com/send?phone=9340762645" rel="no referrer noreferrer" target="_blank">Hire Me</a>
                            {/* <button className="btn btn-hire ">Hire Me</button> */}
                            <a className="btn btn-cv " href={Resume} download="updated resume naveen.pdf">My Resume</a>
                            <a className="btn btn-github " href="https://github.com/mishra-naveen-dev" rel="no referrer noreferrer" target="_blank"  >GitHub</a>
                        </div>
                    </Fade>
                </div>



            </div>
        </>
    )
}

export default Home