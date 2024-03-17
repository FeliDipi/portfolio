const WorkPage = ({index, length}) =>
{
    return (
        <div className="work-item-page-content center">
            <div className="work-item-page-bg"></div>
            <p className="work-item-page center">{`${index+1}/${length}`}</p>
        </div>
    );
}

export default WorkPage;