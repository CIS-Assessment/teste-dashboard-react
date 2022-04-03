import Content from "components/Content";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Content id={0} title={""} isCompleted={false} />
    </div>
  );
}

export default App;
