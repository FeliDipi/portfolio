const WorkPosition = ({status,position}) =>
{
    return (
        <p className="work-extended-position"><span className="bold">Position:</span> {`${status} - ${position}`}</p>
    );
}

export default WorkPosition