import ContactInput from "./ContactInput.jsx";
import ContactSubmit from "./ContactSubmit.jsx";
import { useEmail } from "../../hooks/useEmail.js";
import ContactInfo from "./ContactInfo.jsx";

const ContactForm = () =>
{
    const { state, handleSubmit } = useEmail();

    return (
        <form onSubmit={handleSubmit} className="contact-form center" action="submit">
            <ContactInput title="Name" type="text" placeholder="your name..."/>
            <ContactInput title="Email" type="email" placeholder="example@mail.com..."/>
            <ContactInput title="Message" type="textarea" placeholder="your message..." isTextArea/>
            <div className="contact-form-submit-content center">
                <ContactSubmit state={state}/>
                <ContactInfo/>
            </div>                   
        </form>
    );
}

export default ContactForm;