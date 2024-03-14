import { Icon } from "@iconify/react";
import FormInput from "./FormInput.jsx";
import FormSubmit from "./FormSubmit.jsx";
import { useEmail } from "../../hooks/useEmail.js";
import FormContactInfo from "./FormContactInfo.jsx";

const Contact = () =>
{
    const { state, handleSubmit } = useEmail();

    return (
        <section id="contact" className="center">
            <div className="bg contact-bg">
                <div className="bg-border-back"></div>
                <div className="bg-border-top"></div>
                <div className="bg-content center">
                    <div className="contact-say-hello center">
                        <p className="contact-say-hello-text">Say Hello</p>
                        <Icon className="contact-say-hello-icon" icon="fa6-solid:hand"/>
                    </div>
                    <form onSubmit={handleSubmit} className="contact-form center" action="submit">
                        <FormInput title="Name" type="text" placeholder="your name..."/>
                        <FormInput title="Email" type="email" placeholder="example@mail.com..."/>
                        <FormInput title="Message" type="textarea" placeholder="your message..." isTextArea/>
                        <div className="form-submit-content center">
                            <FormSubmit state={state}/>
                            <FormContactInfo/>
                        </div>                   
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;