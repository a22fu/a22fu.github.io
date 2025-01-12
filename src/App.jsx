import React from "react";
import {
  Header,
  Mainnav,
  Experience,
  Projects,
  Contacts,
  SpaceEffect
} from "./components";

import "./styles/main.css";

const App = () => {
  return (
    <div className="w-[calc(100vw-(100vw-100%))]">
      <Mainnav />
      <SpaceEffect/>      
      <Header />
      <Experience />
      <Projects />
      <Contacts />
    </div>
  );
};

export default App;
