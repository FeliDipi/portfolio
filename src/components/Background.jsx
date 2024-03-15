const Background = ({children,  className, isBottom = true}) =>
{
    const mainStyle = `bg center ${className}`

    return (
        <div className={mainStyle}>
            <div className="bg-border-back"></div>
            <div className="bg-border-top"></div>
            {
                isBottom && <div className="bg-border-bottom"></div>
            }
            <div className="bg-content center">{children}</div>
        </div>
    );
}

export default Background;