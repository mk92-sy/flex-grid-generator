import { useToggle } from "./context/ToggleContext";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Canvas from "./components/Canvas";
import CountBox from "./components/CountBox";

function App() {
  const { toggle } = useToggle();
  return (
    <>
      <Header />
      <SideBar />
      <main className={`main ${toggle ? "aside-open" : ""}`}>
        <Canvas />
        <CountBox />
      </main>
    </>
  );
}

export default App;
