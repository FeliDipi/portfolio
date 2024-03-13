const FormInput = ({title, type, placeholder, validity, isTextArea = false}) =>
{
    const style = !isTextArea?"contact-form-input-content":"contact-form-input-content textarea";

    return (
        <div className="contact-form-article center">
            <div className="contact-form-title">{title} <span className="colored">*</span></div>
            <div className={style}>
                <div className="contact-form-input-bg"></div>
                {
                    !isTextArea?
                        <input id={title} onChange={validity} className="contact-form-input" type={type} placeholder={placeholder} />:
                        <textarea id={title} onChange={validity} className="contact-form-input" type={type} placeholder={placeholder} />
                }
                
            </div>
        </div>
    );
}

export default FormInput;