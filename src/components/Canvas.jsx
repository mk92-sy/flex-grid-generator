import { useStyleContext } from "../context/StyleContext";
import { useToggle } from "../context/ToggleContext";

const Canvas = () => {
  const { isFlex } = useToggle();
  const { state } = useStyleContext();
  return (
    <div
      className={`layout ${isFlex ? "flex" : "grid"}`}
      style={isFlex ? state.flexStyle : state.gridStyle}
    >
      {state.itemLength > 0 ? (
        Array.from({ length: state.itemLength }, (_, i) => i).map(
          (item, index) => (
            <div
              className="item"
              key={item}
              style={
                isFlex
                  ? { ...state.flexItemStyle, ...state.commonItemStyle }
                  : {
                      ...state.gridItemStyle,
                      ...state.commonItemStyle,
                    }
              }
            >
              ITEM {index + 1}
            </div>
          )
        )
      ) : (
        <div className="absolute-center">Click ADD ITEM button!</div>
      )}
    </div>
  );
};

export default Canvas;
