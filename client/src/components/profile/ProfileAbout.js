import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class ProfileAbout extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return <div>ProfileAbout</div>;
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(ProfileAbout);
