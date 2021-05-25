import React, { useState } from 'react'
import { NavbarData } from './NavbarData'
import Submenu from './SubMenu'
import { IconContext } from 'react-icons/lib'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {
    Nav,
    NavIcon,
    NavbarNav,
    NavbarWrap
} from './Navbar.elements'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    const showNavbar = () => setNavbar(!navbar)

    return (
        <>
            <IconContext.Provider value={{ color: "#f1f1f1" }}>
                <Nav>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showNavbar} />
                    </NavIcon>
                </Nav>
                <NavbarNav navbar={navbar}>
                    <NavbarWrap>
                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose onClick={showNavbar} />
                        </NavIcon>
                        {NavbarData.map((item, index) => {
                            return <Submenu item={item} key={index} />
                        })}
                    </NavbarWrap>
                </NavbarNav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar