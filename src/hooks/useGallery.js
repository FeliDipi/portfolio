import { useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export const useGallery = ({length, autoDelay, loop}) =>
{
	const [currentIndex, setIndex] = useState(0);

    const dragX = useMotionValue(0);
  
    const nextPage = (page) =>
    {
        if(page+1>=length && loop) return 0;
        else if(page+1>=length) return length-1;
        else return page+1;
    }

    const backPage = (page) =>
    {
      if(page-1<0 && loop) return length-1;
      else if(page-1< 0) return 0;
      else return page-1;
    }

    useEffect(() => {
      const intervalRef = setInterval(() => {
        const x = dragX.get();
  
        if (x === 0) 
        {
          setIndex((prev)=>(prev+1)%length);
        }
      }, autoDelay);
  
      return () => clearInterval(intervalRef);
    }, []);
  
    const onDragEnd = () => {
      const x = dragX.get();

      if (x < 0) {
        setIndex((prev)=>nextPage(prev));
      } else if (x > 0) {
        setIndex((prev)=>backPage(prev));
      }
    };

	return {
		currentIndex,
    setIndex,
		dragX,
		onDragEnd
	}
};