import React, { useState } from 'react'
import { NavbarData } from './NavbarData'
import Submenu from './SubMenu'
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
        </>
    )
}

export default Navbar