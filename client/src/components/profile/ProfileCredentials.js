import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class ProfileCredentials extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return <div>Profile Credentials</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileCredentials);
