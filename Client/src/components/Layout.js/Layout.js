import React, { useState } from 'react'
import Home from '../../pages/Home/Home'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import './Layout.css';
import Menu from '../Menus/Menus';
const Layout = () => {
    const [toggle, settoggle] = useState(true)

    //change toggle 
    const handleToggle = () => {
        settoggle(!toggle);
    }
    return (
        <>
            <div className="sidebar-section">
                <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
                    <div className="sidebar-toggler-icons">
                        <p onClick={handleToggle}>
                            {
                                toggle ? (<AiOutlineDoubleLeft size={30} />) : (<AiOutlineDoubleRight size={30} />)
                            }

                        </p>
                    </div>
                    <Menu toggle={toggle} />
                </div>
                <div className="container">
                    <Home />
                </div>
            </div>
        </>
    )
}
export default Layout
