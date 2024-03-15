const ContactInput = ({title, type, placeholder, isTextArea = false}) =>
{
    const style = !isTextArea?"contact-form-input-content":"contact-form-input-content contact-form-input-textarea";

    return (
        <div className="contact-form-article center">
            <label className="contact-form-title">{title} <span className="colored">*</span></label>
            <div className={style}>
                <div className="contact-form-input-bg"></div>
                {
                    !isTextArea?
                        <input id={title} className="contact-form-input" type={type} placeholder={placeholder} />:
                        <textarea id={title} className="contact-form-input" type={type} placeholder={placeholder} />
                }
                
            </div>
        </div>
    );
}

export default ContactInput;