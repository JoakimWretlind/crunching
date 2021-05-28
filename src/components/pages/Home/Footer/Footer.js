import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {
    FooterSection,
    HeaderWrapper,
    FooterHeader,
    FooterName,
    FooterMain,
    FooterTextArea,
    FooterText,
    FooterLine,
    LogoWrapper,
    LogoImg
} from './Footer.elements'
import FooterLogo from '../../../utils/images/JwLogo-3.png'

const FooterLayout = () => {

    return (
        <>
            <Router>
                <FooterSection>
                    <HeaderWrapper>
                        <FooterHeader>
                            <FooterName>joakim wretlind</FooterName>
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
                        </FooterTextArea>
                        <LogoWrapper to={{ pathname: 'https://github.com/JoakimWretlind/crunching' }} target="_blank">
                            <LogoImg src={FooterLogo} />
                        </LogoWrapper>
                    </FooterMain>
                </FooterSection>
            </Router>
        </>
    )
}

export default FooterLayout
