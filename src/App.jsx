import { useEffect, useState } from "react";
import { useToggle } from "./context/ToggleContext";
import Header from "./components/Header";

function App() {
  const { toggle, isFlex } = useToggle();
  const [combinedStyle, setCombinedStyle] = useState({});
  const [itemLength, setItemLength] = useState(9);

  const [flexStyle, setFlexStyle] = useState({
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "flex-start",
    rowGap: "0",
    columnGap: "0",
  });
  const [flexItemStyle, setFlexItemStyle] = useState({
    flex: "unset",
  });
  const [gridStyle, setGridStyle] = useState({
    gridTemplateRows: "repeat(auto-fill,minmax(100px, 1fr))",
    gridTemplateColumns: "repeat(auto-fill,minmax(100px, 1fr))",
    gridAutoRows: "100px",
    gridAutoColumns: "100px",
    alignContent: "start",
    justifyContent: "start",
    alignItems: "center",
    justifyItems: "center",
  });
  const [nthChild, setNthChild] = useState(1);
  const [gridItemStyle, setGridItemStyle] = useState({
    alignSelf: "center",
    justifySelf: "center",
    gridRow: "1/3",
    gridColumn: "2/4",
  });
  const [commonItemStyle, setCommonItemStyle] = useState({
    width: "100px",
    height: "100px",
  });

  const updateStyle = (type, name, attr) => {
    if (type === "flex") {
      setFlexStyle((prev) => ({ ...prev, [name]: attr }));
    } else if (type === "grid") {
      setGridStyle((prev) => ({ ...prev, [name]: attr }));
    } else if (type === "flexItem") {
      setFlexItemStyle((prev) => ({ ...prev, [name]: attr }));
    } else if (type === "gridItem") {
      setGridItemStyle((prev) => ({ ...prev, [name]: attr }));
    } else {
      setCommonItemStyle((prev) => ({ ...prev, [name]: attr }));
    }
  };

  function maxLengthCheck(object) {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(
        0,
        object.target.maxLength
      );
    }
  }

  useEffect(() => {
    if (isFlex) {
      setCombinedStyle({ ...flexItemStyle, ...commonItemStyle });
    } else {
      setCombinedStyle({ ...gridItemStyle, ...commonItemStyle });
    }
  }, [flexItemStyle, gridItemStyle, commonItemStyle, isFlex]);

  return (
    <>
      <Header />
      <aside className={`aside ${toggle ? "open" : "close"}`}>
        <section className="section">
          <h2>
            {isFlex ? "Flex" : "Grid"}
            -layout
          </h2>
          <ul className="option-list">
            {isFlex ? (
              <>
                <li>
                  <strong>flex-direction</strong>
                  <select
                    onChange={(e) => {
                      updateStyle("flex", "flexDirection", e.target.value);
                    }}
                  >
                    <option>row</option>
                    <option>row-reverse</option>
                    <option>column</option>
                    <option>column-reverse</option>
                  </select>
                </li>
                <li>
                  <strong>flex-wrap</strong>
                  <select
                    onChange={(e) => {
                      updateStyle("flex", "flexWrap", e.target.value);
                    }}
                  >
                    <option>wrap</option>
                    <option>nowrap</option>
                  </select>
                </li>
                <li>
                  <strong>justify-content</strong>
                  <select
                    onChange={(e) => {
                      updateStyle("flex", "justifyContent", e.target.value);
                    }}
                  >
                    <option>flex-start</option>
                    <option>flex-end</option>
                    <option>center</option>
                    <option>space-around</option>
                    <option>space-between</option>
                    <option>space-evenly</option>
                  </select>
                </li>
                <li>
                  <strong>align-content</strong>
                  <select
                    onChange={(e) => {
                      updateStyle("flex", "alignContent", e.target.value);
                    }}
                  >
                    <option>flex-start</option>
                    <option>flex-end</option>
                    <option>center</option>
                    <option>space-around</option>
                    <option>space-between</option>
                    <option>stretch</option>
                  </select>
                </li>
                <li>
                  <strong>align-items</strong>
                  <select
                    onChange={(e) => {
                      updateStyle("flex", "alignItems", e.target.value);
                    }}
                  >
                    <option>flex-start</option>
                    <option>flex-end</option>
                    <option>center</option>
                    <option>stretch</option>
                    <option>baseline</option>
                  </select>
                </li>
                <li>
                  <strong>row-gap</strong>
                  <div>
                    <input
                      type="number"
                      placeholder="0"
                      min={0}
                      max={9999}
                      maxLength={4}
                      onKeyDown={(e) =>
                        (e.key === "e" || e.key === "-" || e.key === "+") &&
                        e.preventDefault()
                      }
                      onInput={(e) => maxLengthCheck(e)}
                      onChange={(e) => {
                        updateStyle("flex", "rowGap", e.target.value + "px");
                      }}
                      style={{ width: 50, height: 24 }}
                    />
                    <span> px</span>
                  </div>
                </li>
                <li>
                  <strong>column-gap</strong>
                  <div>
                    <input
                      type="number"
                      placeholder="0"
                      min={0}
                      max={9999}
                      maxLength={4}
                      onKeyDown={(e) =>
                        (e.key === "e" || e.key === "-" || e.key === "+") &&
                        e.preventDefault()
                      }
                      onInput={(e) => maxLengthCheck(e)}
                      onChange={(e) => {
                        updateStyle("flex", "columnGap", e.target.value + "px");
                      }}
                      style={{ width: 50, height: 24 }}
                    />
                    <span> px</span>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li>
                  <strong>grid-template-rows</strong>
                  <input
                    type="text"
                    placeholder="100px 100px 100px"
                    onChange={(e) => {
                      updateStyle("grid", "gridTemplateRows", e.target.value);
                    }}
                  />
                </li>
                <li>
                  <strong>grid-template-columns</strong>
                  <input
                    type="text"
                    placeholder="100px 100px 100px"
                    onChange={(e) => {
                      updateStyle(
                        "grid",
                        "gridTemplateColumns",
                        e.target.value
                      );
                    }}
                  />
                </li>
                <li>
                  <strong>grid-auto-rows</strong>
                  <input
                    type="text"
                    placeholder="100px"
                    onChange={(e) => {
                      updateStyle("grid", "gridAutoRows", e.target.value);
                    }}
                  />
                </li>
                <li>
                  <strong>grid-auto-columns</strong>
                  <input
                    type="text"
                    placeholder="100px"
                    onChange={(e) => {
                      updateStyle("grid", "gridAutoColumns", e.target.value);
                    }}
                  />
                </li>
                <li>
                  <strong>align-content</strong>
                  <select
                    onChange={(e) => {
                      updateStyle("grid", "alignContent", e.target.value);
                    }}
                  >
                    <option>start</option>
                    <option>end</option>
                    <option>center</option>
                    <option>space-around</option>
                    <option>space-between</option>
                  </select>
                </li>
                <li>
                  <strong>justify-content</strong>
                  <select
                    onChange={(e) => {
                      updateStyle("grid", "justifyContent", e.target.value);
                    }}
                  >
                    <option>start</option>
                    <option>end</option>
                    <option>center</option>
                    <option>space-around</option>
                    <option>space-between</option>
                  </select>
                </li>
                <li>
                  <strong>align-items</strong>
                  <select
                    onChange={(e) => {
                      updateStyle("grid", "alignItems", e.target.value);
                    }}
                  >
                    <option>start</option>
                    <option>end</option>
                    <option>center</option>
                    <option>stretch</option>
                    <option>baseline</option>
                  </select>
                </li>
                <li>
                  <strong>justify-items</strong>
                  <select
                    onChange={(e) => {
                      updateStyle("grid", "justifyItems", e.target.value);
                    }}
                  >
                    <option>start</option>
                    <option>end</option>
                    <option>center</option>
                    <option>stretch</option>
                  </select>
                </li>
              </>
            )}
          </ul>
          <hr style={{ margin: "25px 0 10px" }} />
          <h2>Item Options</h2>
          <ul className="option-list">
            {isFlex ? (
              <>
                <li>
                  <strong>flex</strong>
                  <input
                    type="text"
                    placeholder="unset"
                    onChange={(e) => {
                      updateStyle("flexItem", "flex", `${e.target.value}`);
                    }}
                  />
                </li>
              </>
            ) : (
              <>
                <li>
                  <strong>
                    item:nth-child{nthChild ? `(${nthChild})` : ""}
                  </strong>
                  <input
                    type="number"
                    placeholder="0"
                    min={0}
                    max={99}
                    maxLength={2}
                    onKeyDown={(e) =>
                      (e.key === "e" || e.key === "-" || e.key === "+") &&
                      e.preventDefault()
                    }
                    onInput={(e) => maxLengthCheck(e)}
                    onChange={(e) => {
                      setNthChild(e.target.value);
                    }}
                  />
                </li>
                <li>
                  <strong>grid-row</strong>
                  <input
                    type="text"
                    placeholder="1/3"
                    onChange={(e) => {
                      updateStyle("gridItem", "gridRow", `${e.target.value}`);
                    }}
                  />
                </li>
                <li>
                  <strong>grid-column</strong>
                  <input
                    type="text"
                    placeholder="2/4"
                    onChange={(e) => {
                      updateStyle(
                        "gridItem",
                        "gridColumn",
                        `${e.target.value}`
                      );
                    }}
                  />
                </li>
                <li>
                  <strong>align-self</strong>
                  <select
                    onChange={(e) => {
                      updateStyle("gridItem", "alignSelf", e.target.value);
                    }}
                  >
                    <option>start</option>
                    <option>end</option>
                    <option>center</option>
                    <option>stretch</option>
                    <option>baseline</option>
                  </select>
                </li>
                <li>
                  <strong>justify-self</strong>
                  <select
                    onChange={(e) => {
                      updateStyle("gridItem", "justifySelf", e.target.value);
                    }}
                  >
                    <option>start</option>
                    <option>end</option>
                    <option>center</option>
                    <option>stretch</option>
                  </select>
                </li>
              </>
            )}
            <>
              <li>
                <strong>width</strong>
                <input
                  type="text"
                  placeholder="100px"
                  onChange={(e) => {
                    updateStyle("common", "width", `${e.target.value}`);
                  }}
                />
              </li>
              <li>
                <strong>height</strong>
                <input
                  type="text"
                  placeholder="100px"
                  onChange={(e) => {
                    updateStyle("common", "height", `${e.target.value}`);
                  }}
                />
              </li>
            </>
          </ul>
        </section>
      </aside>
      <main className={`main ${toggle ? "aside-open" : ""}`}>
        <div
          className={`layout ${isFlex ? "flex" : "grid"}`}
          style={isFlex ? flexStyle : gridStyle}
        >
          {itemLength > 0 ? (
            Array.from({ length: itemLength }, (_, i) => i).map(
              (item, index) => (
                <div
                  className="item"
                  key={item}
                  style={
                    isFlex
                      ? combinedStyle
                      : index == nthChild
                      ? combinedStyle
                      : commonItemStyle
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
        <div className="btn-wrap">
          <button
            onClick={() => {
              setItemLength((prev) => prev + 1);
            }}
          >
            ADD ITEM
          </button>
          <button
            disabled={itemLength === 0 ? true : false}
            onClick={() => {
              setItemLength((prev) => prev - 1);
            }}
          >
            REMOVE ITEM
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
