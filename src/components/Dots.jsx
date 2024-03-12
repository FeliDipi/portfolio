const Dots = ({ items, currentIndex, setIndex }) => 
{
  return (
    <div className="dots-content center">
      <div className="dots-bg"></div>
      <div className="dots-slide center">
        <div className="dots-view center">
          {items.map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => setIndex(idx)}
                className={`dot ${idx === currentIndex ? "dot-selected":"dot-unselected"}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dots;