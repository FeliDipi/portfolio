import { Icon } from "@iconify/react";

const WorkItem = ({data}) => {

  const {gallery} = data;

  return (
    <div className="gallery-item work-item center">
      <img src={`src/assets/images/${gallery[0]}`} />
      <div className="work-item-gradient"></div>
      <div className="work-item-expand center">
        <p className="work-item-expand-text">see more</p>
        <Icon className="work-item-expand-icon" icon="material-symbols:more" />
      </div>
    </div>
  );
};

export default WorkItem;
