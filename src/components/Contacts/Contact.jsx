import Background from "../Background.jsx";
import ContactForm from "./ContactForm.jsx";
import ContactTitle from "./ContactTitle.jsx";

const Contact = () =>
{
    return (
        <section id="contact" className="center">
            <Background className={"contact-bg"} isBottom={false}>
                <ContactTitle/>
                <ContactForm/>
            </Background>
        </section>
    )
}

export default Contact;