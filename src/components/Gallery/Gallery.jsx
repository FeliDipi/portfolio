import { motion } from "framer-motion";
import { useEffect } from "react";

import { useGallery } from "../../hooks/useGallery.js";

import Pagination from "./Pagination.jsx";

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const Gallery = ({children, className, onChangeSlide, autoDelay = 5000, loop = false}) =>
{
  const length = children.length;
  const {currentIndex, setIndex, dragX, onDragEnd} = useGallery({length, autoDelay, loop});

  var mainStyle = "gallery center";
  if(className) mainStyle += ` ${className}`

  useEffect(()=>
  {
    if(onChangeSlide) onChangeSlide(currentIndex);
  },[currentIndex])

  return (
    <div className={mainStyle}>
      <div className="gallery-content">
        <motion.div
          drag={length>1?"x":false}
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${currentIndex * 100/length}%`,
          }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className="gallery-slide center"
        >
          {
            children
          }
        </motion.div>
      </div>
      {
        length>=3 && <Pagination length={length} currentIndex={currentIndex} setIndex={setIndex}/>
      }
    </div>
  );
}

export default Gallery;