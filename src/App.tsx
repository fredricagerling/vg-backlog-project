import Header from "./components/header";
import Content from "./components/content";
import React from "react";
import Years from "./components/years";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Years />
      <Content />
    </React.Fragment>
  );
};

export default App;
