const Dots = ({ items, currentIndex, setIndex }) => 
{
  return (
    <div className="dots-content center">
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
  );
};

export default Dots;