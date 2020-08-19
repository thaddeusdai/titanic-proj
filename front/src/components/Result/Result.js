import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkullCrossbones,
  faSmile,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

class Result extends Component {
  render() {
    if (this.props.titanic.loading) {
      return (
        <div style={{ position: "absolute", left: "50%", top: "25%" }}>
          <FontAwesomeIcon icon={faSpinner} size="10x" color="white" spin />
        </div>
      );
    }
    return (
      <div className="center-align">
        <h1 style={{ color: "white" }}>
          <strong>Result</strong>
        </h1>
        <div
          className="container"
          style={{ background: "white", marginBottom: "15px", padding: "10px" }}
        >
          <h3>
            <strong>
              {" "}
              {this.props.titanic.result !== ""
                ? this.props.titanic.result
                : "Please Return to Home Page and Fill Out the Form Completely Again"}
            </strong>
          </h3>
          {this.props.titanic.result === "You did not Survive!" ? (
            <FontAwesomeIcon icon={faSkullCrossbones} size="5x" />
          ) : (
            ""
          )}
          {this.props.titanic.result === "You Survived!" ? (
            <FontAwesomeIcon icon={faSmile} size="5x" />
          ) : (
            ""
          )}
        </div>
        <Link onClick={this.work} to="/" className="btn">
          Try Again
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    titanic: state.titanic,
  };
}

export default connect(mapStateToProps, {})(Result);
