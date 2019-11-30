import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar title={"Github viewer"} />
        <User />
      </div>
    );
  }
}
export default App;
