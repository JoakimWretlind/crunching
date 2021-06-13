import { SubHeaderLight } from '../index'
import {
    ContactSection,
    ContactLeft,
    ContactRight,
    ContactWrapper
} from './Contact.elements'

const Contact = () => {
    return (
        <>
            <ContactSection>
                <ContactLeft />
                <ContactRight />
                <ContactWrapper>
                    <SubHeaderLight>contact</SubHeaderLight>
                </ContactWrapper>
            </ContactSection>
        </>
    )
}

export default Contact
