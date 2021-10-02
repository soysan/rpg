import React, { VFC } from "react";
import InputArea from "./components/InputArea";
import OutputArea from "./components/OutputArea";
import "./App.css";

const App: VFC = () => {
  return (
    <>
      <div className="wrap">
        <OutputArea />
        <InputArea />
      </div>
    </>
  );
};

export default App;
