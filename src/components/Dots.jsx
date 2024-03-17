import { motion } from "framer-motion";

const Dots = ({ length, currentIndex, setIndex }) => 
{
  const createDots = () =>
  {
    let dots = [];

    for(let i=0;i<length;i++)
    {
      dots.push(
        <motion.button
        key={i}
        onClick={() => setIndex(i)}
        whileHover={{opacity:0.75}}
        className={`dot ${i === currentIndex ? "dot-selected":"dot-unselected"}`}
        ></motion.button>
      );
    };

    return dots;
  }

  return (
    <div className="dots-content center">
      <div className="dots-slide center">
        <div className="dots-view center">
          {
            createDots()
          }
        </div>
        <div className="dots-bg"></div>
      </div>
    </div>
  );
};

export default Dots;