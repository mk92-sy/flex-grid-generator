import { useStyleContext } from "../context/StyleContext";

const CountBox = () => {
  const { state, dispatch } = useStyleContext();

  const setItemLength = (value) => {
    dispatch({ type: "SET_ITEM_LENGTH", value });
  };
  return (
    <div className="btn-wrap">
      <button
        onClick={() => {
          setItemLength(state.itemLength + 1);
        }}
      >
        ADD ITEM
      </button>
      <button
        disabled={state.itemLength === 0 ? true : false}
        onClick={() => {
          setItemLength(state.itemLength - 1);
        }}
      >
        REMOVE ITEM
      </button>
    </div>
  );
};

export default CountBox;
