import styled from 'styled-components';


export const ContactSection = styled.section`
  height: 100vh;
  color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactLeft = styled.div`
  background: linear-gradient(190deg, #460645, #ff5450);
  width: 50%;
  height: 100%;
`;

export const ContactRight = styled.div`
  background: linear-gradient(90deg, #221E1F, #272425);
  width: 50%;
  height: 100%;
`;

export const ContactWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;  
  max-width: 120rem;
  height: 70vh;
  background: #000;
  border-radius: 3rem;
`;