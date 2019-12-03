import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import UserProfile from "./components/users/UserProfile";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
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

  return (
    <GithubState>
      <AlertState>
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
                      <Search />
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
      </AlertState>
    </GithubState>
  );
};
export default App;
