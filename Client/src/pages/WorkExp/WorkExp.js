import React from 'react'
import './WorkExp.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TbBrandCpp, } from 'react-icons/tb';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { GrReactjs } from 'react-icons/gr';
import { DiJavascript1, DiNodejs } from 'react-icons/di';
const WorkExp = () => {
    return (
        <>
            <div id="work" className=" work">
                <div className=" container work-exp">
                    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Work Experinces</h2>
                    <hr />
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "#fab1a0", color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  #fab1a0' }}
                            date=" present"
                            iconStyle={{ background: '#a29bfe', color: 'black' }}
                            icon={<GrReactjs />}
                        >
                            <h3 className="vertical-timeline-element-title">React Framework</h3>
                            <h4 className="vertical-timeline-element-subtitle">Self/Youtube</h4>
                            <p>
                                Here I am learning react with real project which is my first react project is myportfolio.
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#00cec9', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  #00cec9' }}
                            date=" present"
                            iconStyle={{ background: '#a29bfe', color: 'black' }}
                            icon={<DiNodejs />}
                        >
                            <h3 className="vertical-timeline-element-title">Node/Express/MonogoDb</h3>
                            <h4 className="vertical-timeline-element-subtitle">Self/Youtube</h4>
                            <p>
                                Here I am learning node ,express,monogodb with project implementation
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#e17055', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid #e17055' }}
                            date=" present"
                            iconStyle={{ background: '#a29bfe', color: 'black' }}
                            icon={<DiJavascript1 />}
                        >
                            <h3 className="vertical-timeline-element-title">JavaScript</h3>
                            <h4 className="vertical-timeline-element-subtitle">Self/Youtube</h4>
                            <p>
                                Here I am learnin JavaScript about with with project (Snake game, Tic Tia game etc).
                            </p>
                        </VerticalTimelineElement>


                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#fab1a0', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid #fab1a0' }}
                            date=" Dec 2022"
                            iconStyle={{ background: '#a29bfe', color: 'black' }}
                            icon={<FaCss3Alt />}
                        >
                            <h3 className="vertical-timeline-element-title">CSS</h3>
                            <h4 className="vertical-timeline-element-subtitle">Self/Youtube</h4>
                            <p>
                                Here I learn and implement the basic of web developmemt step with css color full world
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#ffeaa7', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid #ffeaa7' }}
                            date=" Dec 2022"
                            iconStyle={{ background: '#a29bfe', color: 'black' }}
                            icon={<AiFillHtml5 />}
                        >
                            <h3 className="vertical-timeline-element-title">HTML</h3>
                            <h4 className="vertical-timeline-element-subtitle">Self/Youtube</h4>
                            <p>
                                Here I learn and implement the basic of web developmemt step
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#b2bec3', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  #b2bec3' }}
                            date=" July 2022"
                            iconStyle={{ background: '#a29bfe', color: 'black' }}
                            icon={<TbBrandCpp />}
                        >
                            <h3 className="vertical-timeline-element-title"> C / C++</h3>

                            <h4 className="vertical-timeline-element-subtitle">Self/CodeMantra-Indore</h4>
                            <p>
                                Here Got chance to learn Programming language to With implementation.
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>

            </div>
        </>
    )
}

export default WorkExp