import { Icon } from "@iconify/react";
import FormInput from "./FormInput.jsx";
import FormSubmit from "./FormSubmit.jsx";

const Contact = () =>
{
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
                    <form className="contact-form center" action="submit">
                        <FormInput title="Name" type="text" placeholder="your name..."/>
                        <FormInput title="Mail" type="mail" placeholder="example@mail.com..."/>
                        <FormInput title="Message" type="textarea" placeholder="your message..." isTextArea/>
                        
                        <div className="form-submit-content center">
                            <FormSubmit/>
                            <div className="form-contact center">
                                <p className="form-contact-title">Contact</p>
                                <p className="form-contact-mail">nicolasfelipedipierro@gmail.com</p>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;