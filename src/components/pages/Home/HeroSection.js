import styled from 'styled-components';
import HeroBackground from '../../utils/images/hbg.png'
import { PrimaryButton } from './index'

const HeroSectionElement = styled.section`
    position: relative;
    height: 80vh;
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    background: url(${HeroBackground});
    background-size: cover;
`

const HeroSectionOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.75));
`

const MainHeader = styled.h1`
  text-align: center;
  margin-top: 30vh;
  font-family: 'oswald';
  color: #f1f1f1;
  text-transform: uppercase;
  font-size: clamp(4.7rem, 3vw, 6.5rem);
  letter-spacing: .15rem;
  span{
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: .05rem;
      -webkit-text-stroke-color: #f1f1f1;
    }
`;

const ButtonContainer = styled.div`
    width: 90%;
    max-width: 30rem;
    margin: 2rem auto;    
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const HeroSection = () => {
    return (
        <>
            <HeroSectionElement>
                <HeroSectionOverlay>
                    <MainHeader>
                        Crunching <span>Numbers</span>
                    </MainHeader>
                    <ButtonContainer>
                        <PrimaryButton>
                            sitemap
                        </PrimaryButton>
                        <PrimaryButton>
                            contact
                        </PrimaryButton>
                    </ButtonContainer>
                </HeroSectionOverlay>
            </HeroSectionElement>
        </>
    )
}

export default HeroSection