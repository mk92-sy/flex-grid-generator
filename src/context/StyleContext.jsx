import { createContext, useReducer, useContext } from "react";

const initialState = {
  itemLength: 9,
  nthChild: 1,
  flexStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "flex-start",
    rowGap: "0",
    columnGap: "0",
  },
  flexItemStyle: { flex: "unset" },
  gridStyle: {
    gridTemplateRows: "repeat(auto-fill,minmax(100px, 1fr))",
    gridTemplateColumns: "repeat(auto-fill,minmax(100px, 1fr))",
    gridAutoRows: "100px",
    gridAutoColumns: "100px",
    alignContent: "start",
    justifyContent: "start",
    alignItems: "center",
    justifyItems: "center",
  },
  gridItemStyle: {
    alignSelf: "center",
    justifySelf: "center",
  },
  commonItemStyle: {
    width: "100px",
    height: "100px",
  },
};

function styleReducer(state, action) {
  switch (action.type) {
    case "UPDATE_STYLE":
      return {
        ...state,
        [action.target]: {
          ...state[action.target],
          [action.name]: action.value,
        },
      };
    case "SET_ITEM_LENGTH":
      return { ...state, itemLength: action.value };
    default:
      return state;
  }
}

const StyleContext = createContext();
export const useStyleContext = () => useContext(StyleContext);

// eslint-disable-next-line react/prop-types
export function StyleProvider({ children }) {
  const [state, dispatch] = useReducer(styleReducer, initialState);
  return (
    <StyleContext.Provider value={{ state, dispatch }}>
      {children}
    </StyleContext.Provider>
  );
}
