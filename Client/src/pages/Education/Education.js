import React from 'react'
import { MdSchool } from 'react-icons/md';
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Education = () => {
    return (
        <>
            <div id="education" className=" education ">
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Education Details</h2>
                <hr />
                <VerticalTimeline>
                    <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2021 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MdSchool />}>
                        <h3 className="vertical-timeline-element-title">B.Tech</h3>
                        <h4 className="vertical-timeline-element-subtitle">Indore (M.P)-India</h4>
                        <p>
                            Bachelor Of Technology Form  in Computer Science Engineering  Department.
                            From Sushila Devi Bansal College Of Engineering BGI Indore Which is Affiliated by RGPV-University Bhopal

                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2020 - 2021"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MdSchool />}>
                        <h3 className="vertical-timeline-element-title">Higher Education(10+2)</h3>
                        <h4 className="vertical-timeline-element-subtitle">C.B.S.E (M.P)-India</h4>
                        <p>
                            Higher Education (10+2) In Science Stream
                            From Adarsh Academy Dhamnod Which is Affiliated by C.B.S.E

                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>

        </>
    )
}

export default Education