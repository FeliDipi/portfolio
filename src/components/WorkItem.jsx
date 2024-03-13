import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const WorkItem = ({data, selectHandle}) => {

  const variants = {
    open:{
        backgroundColor:"#23B684",
        rotate:"0deg"
    },
    close:
    {
        backgroundColor:"#0F595E",
        rotate:"15deg"
    },
    tap:
    {
        scale:0.95
    }
  }

  return (
    <div
      className="gallery-item work-item center"
    >
      <img className="work-item-img" src={`src/assets/images/${data.gallery[0]}`} />
      <div className="work-item-gradient"></div>
      <div className="work-item-expand center">
        <motion.div 
          initial={"close"}
          whileTap={"tap"}
          whileHover={"open"}
          variants={variants}
          onClick={()=>selectHandle(data)}
          className="work-item-expand-bg"
        ></motion.div>
        <Icon className="work-item-expand-icon" icon="material-symbols:more" />
      </div>
    </div>
  );
};

export default WorkItem;
