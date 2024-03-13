import emailjs from '@emailjs/browser';
import { useState } from "react";

export const useEmail = () =>
{
    const [state, setState] = useState("normal");

    const validParams = (params) =>
    {
        return params.sendername && params.senderemail && params.message;
    }

    const getParams = (e) =>
    {
        const inputs = e.target;

        return {
            sendername: inputs[0].value,
            senderemail: inputs[1].value,
            message: inputs[2].value
        }
    }

    const sendEmail = async (params) =>
    {
        setState("loading");

        await emailjs.send(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, params)
        .then(res=>
        {
            setState("success");
        })
        .catch(res=>{
            setState("error");
        });
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();  

        emailjs.init(import.meta.env.VITE_EMAIL_PUBLIC_ID);

        const params = getParams(e);
        
        if(!validParams(params)) 
        {
            setState("error");
            return;
        }
        
        sendEmail(params);
    }

    return {
        state,
        setState,
        handleSubmit
    }
}