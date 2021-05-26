import {
    FooterSection,
    HeaderWrapper,
    FooterHeader,
    FooterName,
    FooterMenu,
    FooterMenuItem,
    FooterTextArea,
    FooterText,
    FooterLine,
    FooterLogo
} from './Footer.elements'

const Footer = () => {
    return (
        <>
            <FooterSection>
                <HeaderWrapper>
                    <FooterHeader>
                        <FooterName>
                            joakim wretlind
                    </FooterName>
                        <FooterMenu>
                            <FooterMenuItem>
                                work
                        </FooterMenuItem>
                            <FooterMenuItem>
                                contact
                        </FooterMenuItem>
                        </FooterMenu>
                    </FooterHeader>
                    <FooterTextArea>
                        <FooterText>
                            A Derailed Calulator Project.
                    </FooterText>
                        <FooterLine />
                        <FooterText>
                            Let's Work Together
                    </FooterText>
                        <FooterLine />
                        <FooterText>
                            Linkedin
                    </FooterText>
                        <FooterLogo>Logo</FooterLogo>
                    </FooterTextArea>

                </HeaderWrapper>
            </FooterSection>
        </>
    )
}

export default Footer
