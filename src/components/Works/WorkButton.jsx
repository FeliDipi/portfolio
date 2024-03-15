import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { BUTTON_STATE } from "../../consts/buttonStates.js";

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

const WorkButton = ({className,icon,handleOnClick}) =>
{
    const mainStyle = `work-button center ${className}`

    return (
        <div className={mainStyle}>
            <motion.div 
                className="work-button-bg"
                initial={BUTTON_STATE.NORMAL}
                whileHover={BUTTON_STATE.HOVER}
                whileTap={BUTTON_STATE.TAP}
                onClick={handleOnClick}
                variants={variants}
            ></motion.div>
            <Icon className="work-button-icon" icon={icon} />
        </div>
    );
}

export default WorkButton;