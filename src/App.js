import React from "react";
import "./App.css";
import CreationsComponent from "./components/CreationsComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import InteractiveComponent from "./components/InteractiveComponent";
import ShowcaseComponent from "./components/ShowcaseComponent";

const App = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <ShowcaseComponent />
      <InteractiveComponent />
      <CreationsComponent />
      <FooterComponent />
    </div>
  );
};

export default App;
