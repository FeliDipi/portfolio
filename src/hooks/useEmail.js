import emailjs from '@emailjs/browser';
import { useState } from "react";
import { SUBMIT_STATE } from '../consts/submitStates.js';

const DELAY_ON_COMPLETE = 2000;

export const useEmail = () =>
{
    const [state, setState] = useState(SUBMIT_STATE.NORMAL);

    const resetState = () =>
    {
        setTimeout(() => 
        {
            setState(SUBMIT_STATE.NORMAL);
        }, DELAY_ON_COMPLETE); 
    }

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
        setState(SUBMIT_STATE.LOAD);

        await emailjs.send(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, params)
                    .then(res=>
                    {
                        setState(SUBMIT_STATE.OK);
                    })
                    .catch(res=>{
                        setState(SUBMIT_STATE.ERROR);
                    });
    }

    const handleSubmit = async (e) =>
    {
        e.preventDefault();  

        emailjs.init(import.meta.env.VITE_EMAIL_PUBLIC_ID);

        const params = getParams(e);
        
        if(!validParams(params)) 
        {
            setState(SUBMIT_STATE.ERROR);
        }
        else
        {
            await sendEmail(params);
        }

        resetState();
    }

    return {
        state,
        handleSubmit
    }
}