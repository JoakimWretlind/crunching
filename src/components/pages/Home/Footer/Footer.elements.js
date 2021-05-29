import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const FooterSection = styled.footer`
  height: min-content;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(#000A1F, #010104);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 8rem;
  border-bottom: .1rem solid #f1f1f1;  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterHeader = styled.ul`
  width: 100%;
  max-width: 70rem;
  margin: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 600px){
     margin: 0;
  }
`;

export const FooterName = styled.h5`
  font-size: 1.8em;
  letter-spacing: .3rem;
  color: #f1f1f1;
`;

export const FooterMain = styled.div`
  height: max-content;
  width: 100%;
  max-width: 70rem;
  margin: 3rem 0 7rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 600px) {
  }
`;

export const FooterTextArea = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const FooterText = styled.p`
font-size: 1.6em;
letter-spacing: .1rem;
  color: #f1f1f1;
`;

export const FooterLine = styled.hr`
  height: .1rem;
  width: 4rem;
  margin: 1.4rem 0;
  color: #f1f1f1;
`;

export const LogoWrapper = styled(Link)`
  width: 16em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImg = styled.img`
  height: 12rem;
  width: 100%;
  object-fit: contain;
  cursor: pointer;

  &:hover {
    animation: rotating 5s linear infinite;
  }
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;