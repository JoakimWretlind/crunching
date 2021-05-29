import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.div`
position: relative;
width: 100%;
max-width: 1500px;
position: fixed;
margin-left: 50%;
transform: translateX(-50%);
z-index: 1;
display: flex;
justify-content: center;
`
export const NavIcon = styled(Link)`
position: absolute;
    font-size: 3rem;
    left: 3rem;
    top: 3rem;
    color: #f1f1f1;
`

export const NavbarNav = styled.nav`
    position: fixed;
    padding: 0 3rem;
    top: 0;
    left: ${({ navbar }) => (navbar ? '0' : '-42rem')};
    background: #15171c;    
    width: clamp(30rem, 100vw, 42rem);
    height: 100%;
    display: flex;
    justify-content: center;    
    transition: .7s;
    z-index: 10;
`

export const NavbarWrap = styled.div`
    width: 200%;
`