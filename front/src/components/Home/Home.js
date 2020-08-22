import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { connect } from "react-redux";
import { getResults } from "../../actions/titanic";

class Home extends Component {
  state = {
    pclass: "",
    sex: "",
    age: "",
    family: "",
    fare: "",
    embarked: "",
    title: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submit = () => {
    const a = {
      fare: parseFloat(this.state.fare).toFixed(2),
      pclass: parseInt(this.state.pclass),
      sex: parseInt(this.state.sex),
      age: parseInt(this.state.age),
      family: parseInt(this.state.family),
      embarked: parseInt(this.state.embarked),
      title: parseInt(this.state.title),
    };
    this.props.getResults(a);
    this.setState({
      pclass: "",
      sex: "",
      age: "",
      family: "",
      fare: "",
      embarked: "",
      title: "",
    });
  };
  render() {
    return (
      <div className="center-align">
        <h1 style={{ color: "white" }}>
          <strong>Home</strong>
        </h1>
        <div className="container">
          <div className="row" id="formpage">
            <form className="col s12">
              <h4>
                <u>Inputs Only Accept Number Inputs</u>
              </h4>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="number"
                    step="1"
                    className="validate"
                    placeholder="Enter Passenger Class (1: upper, 2: middle, 3: lower)"
                    name="pclass"
                    value={this.state.pclass}
                    onChange={(e) => this.onChange(e)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="number"
                    step="1"
                    className="validate"
                    placeholder="Enter Sex (0: female, 1: male)"
                    name="sex"
                    value={this.state.sex}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="number"
                    step="1"
                    className="validate"
                    placeholder="Enter Age"
                    name="age"
                    value={this.state.age}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="number"
                    step="1"
                    className="validate"
                    placeholder="Enter Number of Family Members Onboard"
                    name="family"
                    value={this.state.family}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="number"
                    step="1"
                    className="validate"
                    placeholder="Enter Embarked (2: Cherbourg, 1: Queenstown, 0: Southampton)"
                    name="embarked"
                    value={this.state.embarked}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="number"
                    step=".01"
                    className="validate"
                    placeholder="Enter Fare Price"
                    name="fare"
                    value={this.state.fare}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="number"
                    step="1"
                    className="validate"
                    placeholder="Enter Title (0: Dr, 1: Master, 2: Miss, 3: Mr, 4: Mrs, 5: Officer, 6: Rev, 7: Royalty)"
                    name="title"
                    value={this.state.title}
                    onChange={(e) => this.onChange(e)}
                  />
                </div>
              </div>
              <Link
                onClick={this.submit}
                to="/result"
                className="btn btn-block"
              >
                Submit
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { getResults })(Home);
