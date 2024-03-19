const WorkPosition = ({job}) =>
{
    const { status, position } = job;

    return (
        <p className="work-extended-position"><span className="bold">Position:</span> {`${status} - ${position}`}</p>
    );
}

export default WorkPosition