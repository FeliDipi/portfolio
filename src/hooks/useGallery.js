import { useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

const DRAG_BUFFER = 50;

export const useGallery = ({items, autoDelay}) =>
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
      }, autoDelay);
  
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
    setIndex,
		dragX,
		onDragEnd
	}
};