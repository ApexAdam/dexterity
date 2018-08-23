import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getCurrentProfile} from "../../actions/profileActions";

class Dashboard extends Component {

    componentDidMount(){
        this.props.getCurrentProfile()
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps, {getCurrentProfile}
)(Dashboard);
