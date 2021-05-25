import styled from 'styled-components';

const PrimaryButton = styled.button`
    background: rgba(0,0,0,.6);
    border: .1rem solid #f1f1f1;
    border-radius: .3rem;
    outline: none;
    color: #f1f1f1;
    font-size: 1.3em;
    padding: .8rem 1.8rem;
    text-transform: uppercase;
    letter-spacing: .1rem;
    cursor: pointer;
    transition: all .2s ease;
    box-shadow: 0 .4rem .6rem rgba(0,0,0,.8);

    &:hover {
        background: #0A5A61;
        transform: translateY(.1rem);
        box-shadow: 0 .2rem .4rem rgba(0,0,0,.8);
    }
`

export default PrimaryButton