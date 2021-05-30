import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.div`
position: fixed;
margin-left: 3rem;
z-index: 1;
    @media screen and (min-width: 767px) {
        margin-left: 8rem;
    }
`
export const NavIcon = styled(Link)`
    font-size: 3rem;
    margin: 3rem 0;    
    display: flex;
    justify-content: flex-end;   
    color: #f1f1f1;

    @media screen and (min-width: 767px) {
        margin: 5rem 0 0 -1rem;
    }
`

export const NavbarNav = styled.nav`
    position: fixed;
    padding: 0 3rem;
    top: 0;
    left: ${({ navbar }) => (navbar ? '0' : '-42rem')};
    background: #15171c;    
    width: 100%;
    max-width: 42rem;
    height: 100%;
    display: flex;
    justify-content: center;    
    transition: .7s;
    z-index: 10;
`

export const NavbarWrap = styled.div`
    width: 200%;
`