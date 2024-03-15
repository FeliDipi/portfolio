import images from "../../../hooks/useImage";

const WorkEnterprisePreview = ({logo}) =>
{
    const logoKey = `/src/assets/images/${logo}`;

    return (
        <img className="work-info-logo" src={images[logoKey]}></img>
    );
}

export default WorkEnterprisePreview;