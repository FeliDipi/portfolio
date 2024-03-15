import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { BUTTON_STATE } from "../../consts/buttonStates.js";

import images from "../../hooks/useImage.js";

const variants = 
{
  normal:
  {
      backgroundColor:"#0F595E",
      rotate:"15deg"
  },
  hover:
  {
      backgroundColor:"#23B684",
      rotate:"0deg"
  },
  tap:
  {
      scale:0.95
  }
}

const WorkItem = ({data, selectHandle}) => {

  const imageKey = `/src/assets/images/${data.gallery[0]}`;

  return (
    <div
      className="gallery-item work-item center"
    >
      <img className="work-item-img" src={images[imageKey]} />
      <div className="work-item-gradient"></div>
      <div className="work-item-expand center">
        <motion.div 
          className="work-item-expand-bg"
          initial={BUTTON_STATE.NORMAL}
          whileHover={BUTTON_STATE.HOVER}
          whileTap={BUTTON_STATE.TAP}
          onClick={()=>selectHandle(data)}
          variants={variants}
        ></motion.div>
        <Icon className="work-item-expand-icon" icon="material-symbols:more" />
      </div>
    </div>
  );
};

export default WorkItem;
