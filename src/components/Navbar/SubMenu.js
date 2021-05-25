import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

/* Styled Cmponents */
const NavbarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    height: 6rem;
    font-size: 1.8rem;
    transition: .3s;
    border-left: .3rem solid transparent;

    &:hover {
        background: #252831;
        border-left: .3rem solid #3894B2;
        cursor: pointer;
    }
`

const NavbarLabel = styled.span`
margin-left: 1.6rem;
`

const DropdownLink = styled(Link)`
    background: #252831;
    height: 6rem;
    padding-left: 5rem;
    display: flex;
    align-items: center;
    color: #f1f1f1;
    font-size: 1.8rem;
    border-left: .3rem solid transparent;

    &:hover {
        border-left: .3rem solid #3894B2;
        background: #292C3B;
        cursor: pointer;
    }
`

const Submenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)

    return (
        <>
            <NavbarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <NavbarLabel>
                        {item.title}
                    </NavbarLabel>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </NavbarLink>
            {subnav && item.subNav.map((item, index) => {
                return (
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <NavbarLabel>
                            {item.title}
                        </NavbarLabel>
                    </DropdownLink>
                )
            })}
        </>
    )
}

export default Submenu