import React, { Component, Fragment } from "react";
import "./App.css";
import Result from "./components/Result/Result";
import Home from "./components/Home/Home";
import "./components/Home/Home.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import root from "./reducers/root";

const initStore = {};
const middle = [thunk];
const store = createStore(
  root,
  initStore,
  composeWithDevTools(applyMiddleware(...middle))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="behind">
          <Router>
            <Route exact path="/result" component={Result} />
            <Route exact path="/" component={Home} />
          </Router>
        </div>
      </Provider>
    );
  }
}
export default App;
