import styled from 'styled-components';

export const CalcSection = styled.section`
    height: 100vh;
    width: 100%;
    background: ${({ theme }) => theme.calcSection.background};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CalcBody = styled.ul`
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.calcBody.background};
    border-radius: ${({ theme }) => theme.calcBody.radius};
    box-shadow: ${({ theme }) => theme.calcBody.shadow};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 415px){
      height: min-content;
      justify-content: center;
      max-width: 28rem;
    }
`;

export const CalcInputs = styled.div`
    overflow-x: hidden;
    height: ${({ theme }) => theme.calcInputs.height};
    min-height: ${({ theme }) => theme.calcInputs.minHeight};
    width: 100%;
    background: ${({ theme }) => theme.calcInputs.background};
    padding: 0 2rem;
    margin-top: ${({ theme }) => theme.calcInputs.marginTop};
    color: ${({ theme }) => theme.calcInputs.text};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.8em;
    letter-spacing: .1rem;
    font-family: ${({ theme }) => theme.font};
`;

export const CalcResult = styled.div`
    overflow-x: hidden;
    width: 100%;
    min-height: 2em;
    background: ${({ theme }) => theme.calcResult.background};
    padding: .5rem 2rem .5rem .5rem;
    font-size: clamp(4rem, 6vw, 6rem);
    letter-spacing: .1rem;
    color: ${({ theme }) => theme.calcResult.text};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-family: ${({ theme }) => theme.font};
`;

export const ButtonGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

export const CalcButton = styled.button`
    height: ${({ theme }) => theme.numberButtons.height};
    background:  ${({ theme }) => theme.numberButtons.background};
    outline: none;
    border: none;
    border-top: .1rem solid white;
    border-right: .1rem solid white;
    &:nth-child(4n){
      border-right: none;
    }
    font-size: 1.6em;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;  
    font-family: ${({ theme }) => theme.font};
    cursor: pointer;
`;