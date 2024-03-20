import images from "../../../hooks/useImage.js";
import { useWorks } from "../../../hooks/useWorks.js";

import WorkButton from "../WorkButton.jsx";
import WorkPage from "./WorkPage.jsx";

const WorkItem = ({data, index}) => {

  const { handleOpen, works } = useWorks();
  const imageKey = `/src/assets/images/${data.gallery[0]}`;

  return (
    <div
      className="gallery-item work-item center"
    >
      <img className="work-item-img-bg" src={images[imageKey]} />
      <img className="work-item-img" src={images[imageKey]} />
      <div className="work-item-gradient">
        <div className="work-item-footer center">
          <WorkPage index={index} length={works.length}/>
          <WorkButton className={"work-button-open"} icon={"material-symbols:more"} handleOnClick={handleOpen}/>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
