import { useStyleContext } from "../context/StyleContext";
import { useToggle } from "../context/ToggleContext";
import { maxLengthCheck } from "../util";

const SideBar = () => {
  const { dispatch } = useStyleContext();
  const { toggle, isFlex } = useToggle();

  const updateStyle = (target, name, value) => {
    dispatch({ type: "UPDATE_STYLE", target, name, value });
  };

  return (
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
                    updateStyle("flexStyle", "flexDirection", e.target.value);
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
                    updateStyle("flexStyle", "flexWrap", e.target.value);
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
                    updateStyle("flexStyle", "justifyContent", e.target.value);
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
                    updateStyle("flexStyle", "alignContent", e.target.value);
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
                    updateStyle("flexStyle", "alignItems", e.target.value);
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
                      updateStyle("flexStyle", "rowGap", e.target.value + "px");
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
                      updateStyle(
                        "flexStyle",
                        "columnGap",
                        e.target.value + "px"
                      );
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
                    updateStyle(
                      "gridStyle",
                      "gridTemplateRows",
                      e.target.value
                    );
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
                      "gridStyle",
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
                    updateStyle("gridStyle", "gridAutoRows", e.target.value);
                  }}
                />
              </li>
              <li>
                <strong>grid-auto-columns</strong>
                <input
                  type="text"
                  placeholder="100px"
                  onChange={(e) => {
                    updateStyle("gridStyle", "gridAutoColumns", e.target.value);
                  }}
                />
              </li>
              <li>
                <strong>align-content</strong>
                <select
                  onChange={(e) => {
                    updateStyle("gridStyle", "alignContent", e.target.value);
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
                    updateStyle("gridStyle", "justifyContent", e.target.value);
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
                    updateStyle("gridStyle", "alignItems", e.target.value);
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
                    updateStyle("gridStyle", "justifyItems", e.target.value);
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
                    updateStyle("flexItemStyle", "flex", `${e.target.value}`);
                  }}
                />
              </li>
            </>
          ) : (
            <>
              <li>
                <strong>align-self</strong>
                <select
                  onChange={(e) => {
                    updateStyle("gridItemStyle", "alignSelf", e.target.value);
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
                    updateStyle("gridItemStyle", "justifySelf", e.target.value);
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
                  updateStyle("commonItemStyle", "width", `${e.target.value}`);
                }}
              />
            </li>
            <li>
              <strong>height</strong>
              <input
                type="text"
                placeholder="100px"
                onChange={(e) => {
                  updateStyle("commonItemStyle", "height", `${e.target.value}`);
                }}
              />
            </li>
          </>
        </ul>
      </section>
    </aside>
  );
};

export default SideBar;
