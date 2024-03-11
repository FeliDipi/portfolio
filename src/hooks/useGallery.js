import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const useGallery = ({items}) =>
{
    const [currentIndex, setIndex] = useState(0);

    const dragX = useMotionValue(0);
  
    useEffect(() => {
      const intervalRef = setInterval(() => {
        const x = dragX.get();
  
        if (x === 0) {
          setIndex((pv) => {
            if (pv === items.length - 1) {
              return 0;
            }
            return pv + 1;
          });
        }
      }, AUTO_DELAY);
  
      return () => clearInterval(intervalRef);
    }, []);
  
    const onDragEnd = () => {
      const x = dragX.get();
  
      if (x <= -DRAG_BUFFER && currentIndex < items.length - 1) {
        setIndex((pv) => pv + 1);
      } else if (x >= DRAG_BUFFER && currentIndex > 0) {
        setIndex((pv) => pv - 1);
      }
    };

    return {
        currentIndex,
        dragX,
        setIndex,
        onDragEnd
    }
}