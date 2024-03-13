import { Icon } from "@iconify/react";
import FormInput from "./FormInput.jsx";
import FormSubmit from "./FormSubmit.jsx";
import { useState } from "react";

const Contact = () =>
{
    const [validity,setValidity] = useState({Name:false,Mail:false,Message:false});
    const [form,setForm] = useState(null);

    const handleValidity = (e) =>
    {
        const newValidity = 
        {
            ...validity,
            [e.target.id]:e.target.validity.valid
        }

        setValidity(newValidity);
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        const inputs = e.target;

        const newForm = {
            name:inputs[0].value,
            mail:inputs[1].value,
            message:inputs[2].value
        }

        setForm(newForm);

        console.log(newForm);
    }

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
                        <FormInput title="Name" type="text" placeholder="your name..." validity={handleValidity}/>
                        <FormInput title="Mail" type="email" placeholder="example@mail.com..." validity={handleValidity}/>
                        <FormInput title="Message" type="textarea" placeholder="your message..." validity={handleValidity} isTextArea/>
                        
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