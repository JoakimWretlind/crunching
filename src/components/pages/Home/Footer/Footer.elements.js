import styled from 'styled-components';

export const FooterSection = styled.footer`
  height: min-content;
  min-height: 30vh;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  background: linear-gradient(#000A1F, #010104);
  padding: 1rem;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 8rem;
  border-bottom: .1rem solid #f1f1f1;
`;

export const FooterHeader = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 80rem;
  padding: 3rem 5rem 0 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

export const FooterName = styled.p`
font-size: 2rem;
  color: #f1f1f1;
`;

export const FooterMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
`;

export const FooterMenuItem = styled.li`
  color: #f1f1f1;
  cursor: pointer;
`;

export const FooterTextArea = styled.div`
  margin: 0 auto;
  max-width: 70rem;
  grid-area: text;
  margin-top: 4rem;
  display: grid;
  justify-content: space-between;
`;

export const FooterText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: #f1f1f1;
  font-size: 1.6rem;
`;

export const FooterLine = styled.hr`
  height: .1rem;
  width: 5rem;
  background: #f1f1f1;
  margin: 1rem 0;
`;

export const FooterLogo = styled.div`
  color: #f1f1f1;
`;


