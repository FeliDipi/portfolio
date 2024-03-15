import images from "../../hooks/useImage.js";

import WorkButton from "./WorkButton.jsx";

const WorkItem = ({data, handleSelect}) => {

  const imageKey = `/src/assets/images/${data.gallery[0]}`;

  const handleOnClick = () =>
  {
    handleSelect(data);
  }

  return (
    <div
      className="gallery-item work-item center"
    >
      <img className="work-item-img" src={images[imageKey]} />
      <div className="work-item-gradient"></div>
      <WorkButton className={"work-button-open"} icon={"material-symbols:more"} handleOnClick={handleOnClick}/>
    </div>
  );
};

export default WorkItem;
