import React from "react";
import Content from "components/Content";
import Header from "./components/Header";
import { useState } from "react";

export const checkedContext = React.createContext({});

function App() {
  const [checked, setChecked] = useState(0);
  return (
    <div>
      <checkedContext.Provider value={{ checked, setChecked }}>
        <Header />
        <Content id={0} title={""} isCompleted={false} />
      </checkedContext.Provider>
    </div>
  );
}

export default App;
export const useChecked = () => React.useContext(checkedContext);
