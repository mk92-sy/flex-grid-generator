import { useToggle } from "../context/ToggleContext";

const Header = () => {
  const { toggle, setToggle, isFlex, setIsFlex } = useToggle();
  return (
    <header className="header">
      <button
        className={`config ${toggle ? "open" : ""}`}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        설정
      </button>
      <h1
        className={`title ${isFlex ? "flex" : "grid"}`}
        onClick={() => {
          setIsFlex(!isFlex);
        }}
      >
        FLEX & GRID
      </h1>
    </header>
  );
};

export default Header;
