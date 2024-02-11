/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Projects.css'
import img1 from '../../images/website_imge.png'
import img2 from '../../images/project2.png'
import img3 from '../../images/project3.png'
import img4 from '../../images/netflix_p.png';
import Fade from 'react-reveal/Fade';

const Projects = () => {
    return (
        <>
            <div id="project" className="container projects">

                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Projects</h2>
                <hr />
                <p className="pb-3 text-center">
                    👉 Here are my top 3 recent projects with live links
                    and source code</p>
                {/* card design  */}
                <div className="row" id="ads">
                    {/* project1 */}
                    <Fade right>

                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">Full Stack</span>
                                    <img src={img1} alt="project1" />

                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">Express</span>
                                    <span className="card-detail-badge">React</span>
                                    <span className="card-detail-badge">Mongodb</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">
                                            My Portfolio WebApp
                                        </h5>
                                        <a className="ad-btn text-uppercase" href="#" >View</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Fade>
                    {/* project2 */}
                    <Fade bottom>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">JavaScript Project</span>
                                    <img src={img2} alt="project2" />

                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">HTML</span>
                                    <span className="card-detail-badge">CSS</span>
                                    <span className="card-detail-badge">JavaScript</span>
                                    <span className="card-detail-badge">API</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">
                                            Analog Clock With Current Time
                                        </h5>
                                        <a className="ad-btn text-uppercase" href="https://mishra-naveen-dev.github.io/analog_clock/" target="_blank" rel="noreferrer" >View</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Fade>
                    {/* project3 */}
                    <Fade left>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">JavaScript Project</span>
                                    <img src={img3} alt="project3" />

                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">HTML</span>
                                    <span className="card-detail-badge">CSS</span>
                                    <span className="card-detail-badge">JavaScript</span>
                                    {/* <span className="card-detail-badge">Mongodb</span> */}
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">
                                            Login & Resgistration Form
                                        </h5>
                                        <a className="ad-btn text-uppercase" href="https://mishra-naveen-dev.github.io/Login-registration-page/?%23=&%23=&%23=" target="_blank" rel="noreferrer" >View</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Fade>

                    {/* project4 */}
                    <Fade left>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">Netflix Clone Project</span>
                                    <img src={img4} alt="netflix_p" />

                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">HTML</span>
                                    <span className="card-detail-badge">CSS</span>
                                    <span className="card-detail-badge">JavaScript</span>

                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">
                                            Netflix Clone Project
                                        </h5>
                                        <a className="ad-btn text-uppercase" href="https://mishra-naveen-dev.github.io/Netflix_Clone/" target="_blank" rel="noreferrer" >View</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Fade>
                </div>

            </div>




            {/* <div className="container certificates">
            <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Certificates</h2>
            <hr />

        </div> */}
        </>
    )
}

export default Projects