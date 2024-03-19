const Dot = ({index, handlePagination, isCurrent, isCorner}) =>
{
    var mainStyle = "dot";

    if(isCurrent) mainStyle += " dot-selected";
    if(isCorner) mainStyle += " dot-corner";

    const handleClick = () =>
    {
        handlePagination(index);
    }

    return (
        <button
            onClick={handleClick}
            className={mainStyle}
        ></button>
    );
}

export default Dot;