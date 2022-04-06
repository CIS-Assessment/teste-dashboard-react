import React from "react";
import Content from "components/Content/Content";
import Header from "./components/Header/Header";
import { useState } from "react";
import GlobalStyle from "./styles/global";

export const checkedContext = React.createContext({});

function App() {
  const [checked, setChecked] = useState(0);
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <checkedContext.Provider value={{ checked, setChecked }}>
        <GlobalStyle />
        <Header />
        <Content id={0} title={""} isCompleted={false} />
      </checkedContext.Provider>
    </div>
  );
}

export default App;
export const useChecked = () => React.useContext(checkedContext);
