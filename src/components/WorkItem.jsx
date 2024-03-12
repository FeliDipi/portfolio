import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const WorkItem = ({data, selectHandle}) => {
  return (
    <motion.div
      whileTap={{scale:0.97}} 
      className="gallery-item work-item center"
      onClick={()=>selectHandle(data)}
    >
      <img className="work-item-img" src={`src/assets/images/${data.gallery[0]}`} />
      <div className="work-item-gradient"></div>
      <div className="work-item-expand center">
        <p className="work-item-expand-text">see more</p>
        <Icon className="work-item-expand-icon" icon="material-symbols:more" />
      </div>
    </motion.div>
  );
};

export default WorkItem;
