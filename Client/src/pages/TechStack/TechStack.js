import React from 'react'
import './TechStack.css'
import { TechStackList } from '../../utils/TechStackList';
import Wobble from 'react-reveal/Wobble';

const TechStack = () => {
    return (
        <>
            <div id="techstack" className="container techstack">
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Technologies Stack</h2>
                <hr />
                <p className="pb-3 text-center">👉 Including Programming Language ,
                    Front-End Developer!, React Native Developer! tools,</p>

                <div className="row">
                    {TechStackList.map((tech) => (
                        <Wobble>
                            <div key={tech._id} className="col-md-3">
                                <div className="card m-2">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <div className="media d-flex justify-content-center">
                                                <div className="alig-self-center">
                                                    <tech.icon className="tech-icon" />
                                                </div>
                                                <div className="media-body">
                                                    <h5>{tech.name}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Wobble>

                    ))}
                </div>
            </div>
        </>
    )
}

export default TechStack