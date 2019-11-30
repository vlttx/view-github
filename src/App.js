import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar title={"Github viewer"} />
      </div>
    );
  }
}
export default App;
