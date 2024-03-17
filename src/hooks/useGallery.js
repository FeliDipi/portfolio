import { useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export const useGallery = ({length, autoDelay, loop}) =>
{
	const [currentIndex, setIndex] = useState(0);

    const dragX = useMotionValue(0);
  
    const nextPage = (isLoop) =>
    {
      let newIndex = currentIndex + 1;

      if(newIndex===length && isLoop) newIndex = 0;
      else if(newIndex===length && !isLoop) newIndex = length-1;

      return newIndex;
    }

    const backPage = (isLoop) =>
    {
      let newIndex = currentIndex - 1;

      if(newIndex<0 && isLoop) newIndex = length-1;
      else if(newIndex<0 && !isLoop) newIndex = 0;

      return newIndex;
    }

    useEffect(() => {
      const intervalRef = setInterval(() => {
        const x = dragX.get();
  
        if (x === 0) 
        {
          const newIndex = nextPage(true);
          setIndex(newIndex);
        }
      }, autoDelay);
  
      return () => clearInterval(intervalRef);
    }, []);
  
    const onDragEnd = () => {
      const x = dragX.get();
  
      if (x < 0) {
        setIndex(nextPage(loop));
      } else if (x > 0) {
        setIndex(backPage(loop));
      }
    };

	return {
		currentIndex,
    setIndex,
		dragX,
		onDragEnd
	}
};