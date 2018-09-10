import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class ProfileGithub extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return <div>ProfileGithub</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileGithub);
