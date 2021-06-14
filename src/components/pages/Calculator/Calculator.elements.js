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
    border: ${({ theme }) => theme.calcBody.border};

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
    padding: 1rem 2rem 0;
    margin-top: ${({ theme }) => theme.calcInputs.marginTop};
    color: ${({ theme }) => theme.calcInputs.text};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: ${({ theme }) => theme.calcInputs.fontSize};
    letter-spacing: .1rem;
    font-family: ${({ theme }) => theme.font};
    box-shadow: ${({ theme }) => theme.calcInputs.shadow};
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
    box-shadow: ${({ theme }) => theme.calcResult.shadow};
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
    border-top: ${({ theme }) => theme.numberButtons.border};
    border-right: ${({ theme }) => theme.numberButtons.border};
    &:nth-child(4n){
      border-right: none;
    };
    border-radius: ${({ theme }) => theme.numberButtons.borderRadius};
    margin: ${({ theme }) => theme.numberButtons.margin};
    font-size: 1.6em;
    color: ${({ theme }) => theme.numberButtons.text};
    display: flex;
    justify-content: center;
    align-items: center;  
    font-family: ${({ theme }) => theme.font};
    box-shadow: ${({ theme }) => theme.numberButtons.shadow};
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.numberButtons.hoverBG};
        box-shadow: ${({ theme }) => theme.numberButtons.hoverShadow};
         
    }
    &:focus {
        box-shadow: ${({ theme }) => theme.numberButtons.focusShadow};
    }
    &.equals {
        background: ${({ theme }) => theme.equalsButton.background};
        color: ${({ theme }) => theme.equalsButton.text};

        &:hover {
            background: ${({ theme }) => theme.equalsButton.hoverBG};
        }
    }&.operator {
        background: ${({ theme }) => theme.operator.background};
    }
    &.backspace {
        background: ${({ theme }) => theme.backspace.background};
    }
    &.bracket {
        background: ${({ theme }) => theme.bracket.background};
    }
    &.ac {
        background: ${({ theme }) => theme.ac.background};
    }
`;