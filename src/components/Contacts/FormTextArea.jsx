const FormTextArea = ({title, type, placeholder}) =>
{
    return (
        <div className="contact-form-article center">
            <div className="contact-form-title">{title} <span className="colored">*</span></div>
            <div className="contact-form-textarea-content">
                <div className="contact-form-input-bg"></div>
                <textarea className="contact-form-textarea" type={type} placeholder={placeholder} />
            </div>
        </div>
    );
}

export default FormTextArea;