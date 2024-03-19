const WorkReference = ({reference}) =>
{
    const { name, link } = reference;

    return (
        <div className="work-extended-reference-content">
            <span className="bold">Reference: </span>
            <a className="work-extended-reference" href={link} target="_blank" rel="noopener noreferrer">{name}</a>
        </div>
    );
}

export default WorkReference;