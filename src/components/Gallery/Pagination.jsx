import { motion } from "framer-motion";
import Dot from "./Dot";
import { useEffect, useRef, useState } from "react";

const Pagination = ({ length, currentIndex, setIndex }) => 
{
  const ref = useRef(null);
  const [x, setX] = useState(0);

  const dots = Array(length).fill(0,0,length);

  useEffect(()=>
  {
    if(currentIndex <= 2)
    {
      setX(ref.current.clientWidth/length * 0);
    }
    else if(currentIndex >= length-3)
    {
      setX(ref.current.clientWidth/length * (length-3));
    }
    else
    {
      setX(ref.current.clientWidth/length * (currentIndex-1));
    }
  },[currentIndex]);

  return (
    <div className="pagination center">
      <div className="dots-bg"></div>
      <div className="dots center">
        <motion.div 
          ref={ref}
          animate={{
            translateX: `-${x}px`,
          }}
          className="dots-slide center"
        >
          {
            dots.map((value,idx)=>(
              <Dot 
                key={idx} 
                index={idx} 
                handlePagination={setIndex} 
                isCurrent={idx===currentIndex} 
                isCorner={idx===0 || idx===length-1}/>
              )
            )
          }
        </motion.div>
      </div>
    </div>
  );
};

export default Pagination;