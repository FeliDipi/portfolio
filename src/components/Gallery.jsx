import { motion } from "framer-motion";
import Dots from "./Dots.jsx";
import { useGallery } from "../hooks/useGallery.js";

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const Gallery = ({children}) =>
{
  const {currentIndex, dragX, setIndex, onDragEnd, items} = useGallery();

  return (
    <div className="gallery center">
      <div className="gallery-content">
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${currentIndex * 100/items.length}%`,
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
      <Dots items={items} currentIndex={currentIndex} setIndex={setIndex}/>
    </div>
  );
}

export default Gallery;