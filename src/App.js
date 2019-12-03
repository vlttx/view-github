import React, { Fragment, useState } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import UserProfile from "./components/users/UserProfile";
import GithubState from "./context/github/GithubState";

const App = () => {
  const [alert, setAlert] = useState(null);

  // useEffect(
  //   () => {
  //     setLoading(true);
  //     const loadData = async () => {
  //       const res = await axios.get(
  //         `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //       );
  //       setUsers(res.data.items);
  //       setLoading(false);
  //     };
  //     loadData();
  //   },

  //eslint-disable-next-line
  //   []
  // );

  //set alert

  const getAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000); //make alert go away after 5seconds
  };

  return (
    <GithubState>
      <BrowserRouter>
        <div className="App">
          <Navbar title={" Github viewer"} />

          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search setAlert={getAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={UserProfile} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </GithubState>
  );
};
export default App;
