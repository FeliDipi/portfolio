import { motion } from "framer-motion";

const Dots = ({ items, currentIndex, setIndex }) => 
{
  return (
    <div className="dots-content center">
      <div className="dots-slide center">
        <div className="dots-view center">
          {items.map((_, idx) => {
            return (
              <motion.button
              key={idx}
              onClick={() => setIndex(idx)}
              whileHover={{opacity:0.75}}
              className={`dot ${idx === currentIndex ? "dot-selected":"dot-unselected"}`}
              ></motion.button>
              );
            })}
        </div>
        <div className="dots-bg"></div>
      </div>
    </div>
  );
};

export default Dots;