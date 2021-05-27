import {
    FooterSection,
    HeaderWrapper,
    FooterHeader,
    FooterName,
    FooterMenu,
    FooterItem,
    FooterMain,
    FooterTextArea,
    FooterText,
    FooterLine,
    LogoWrapper,
    LogoImg
} from './Footer.elements'
import FooterLogo from '../../../utils/images/JwLogo.png'

const Footer = () => {
    return (
        <>
            <FooterSection>
                <HeaderWrapper>
                    <FooterHeader>
                        <FooterName>joakim wretlind</FooterName>
                        <FooterMenu>
                            <FooterItem>work</FooterItem>
                            <FooterItem>contact</FooterItem>
                        </FooterMenu>
                    </FooterHeader>
                </HeaderWrapper>
                <FooterMain>
                    <FooterTextArea>
                        <FooterText>
                            An app to help you get your numbers right
                        </FooterText>
                        <FooterLine />
                        <FooterText>
                            Let's Work Together
                        </FooterText>
                        <FooterLine />
                        <FooterText>
                            Contact
                        </FooterText>
                    </FooterTextArea>
                    <LogoWrapper>
                        <LogoImg src={FooterLogo} />
                    </LogoWrapper>
                </FooterMain>
            </FooterSection>
        </>
    )
}

export default Footer
