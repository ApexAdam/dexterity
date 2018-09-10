import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class ProfileHeader extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return <div>ProfileHeader</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileHeader);
