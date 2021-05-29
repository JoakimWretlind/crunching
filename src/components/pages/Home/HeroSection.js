import Particles from 'react-particles-js';
import styled from 'styled-components';
import { PrimaryButton } from './index'

const HeroSectionElement = styled.section`
    position: relative;
    height: 80vh;
    width: 100%;
    margin: 0 auto;
    background: linear-gradient(#0C2737, #041A27);
`

const MainHeader = styled.h1`
  position: absolute;
  top: 22vh;
  text-align: center;
  width: 100%;
  font-family: 'oswald';
  color: #f1f1f1;
  text-transform: uppercase;
  font-size: clamp(4.7rem, 3vw, 6.5rem);
  letter-spacing: .15rem;
  padding: 0 3rem;
  span{
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: .05rem;
      -webkit-text-stroke-color: #f1f1f1;
    }
    @media screen and (min-width: 517px){
        margin-top: 5vh;
    }
`;

const ButtonContainer = styled.div`
    position: absolute;
    top: 40vh;
    left: 50%;
    transform: translateX(-50%);
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
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 40,
                                density: {
                                    enable: true,
                                    value_area: 600
                                }
                            },
                            color: {
                                value: "#fff"
                            },
                            line_linked: {
                                shadow: {
                                    enable: true,
                                    color: "#fff",

                                }
                            },
                            opacity: {
                                value: 0.5,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: .8,
                                    minimumValue: 0.1,
                                    sync: false
                                }
                            },
                        },
                        interactivity: {
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "repulse"
                                }
                            }
                        }
                    }}
                    height="80vh"
                />
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
            </HeroSectionElement>
        </>
    )
}

export default HeroSection