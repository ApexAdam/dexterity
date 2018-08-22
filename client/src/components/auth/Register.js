import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup'

import {registerUser} from "../../actions/authAction";

class Register extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        password2: '',
        errors: {}
    };

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    onChange = e =>
        this.setState({
            [e.target.name]: e.target.value
        });

    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            errors: {}
        };

        this.props.registerUser(newUser, this.props.history)

    };

    render() {

        const {errors} = this.state;

        return (
            <div>
                <div className="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h1 className="display-4 text-center">Sign Up</h1>
                                <p className="lead text-center">Create your Dexterity account</p>
                                <form onSubmit={this.onSubmit}>
                                    <TextFieldGroup
                                        value={this.state.name}
                                        name="name"
                                        onChange={this.onChange}
                                        error={errors.name}
                                        placeholder="Name"/>
                                    <TextFieldGroup
                                        type="email"
                                        value={this.state.email}
                                        name="email"
                                        onChange={this.onChange}
                                        error={errors.email}
                                        placeholder="Email address"
                                        info="For profile pictures use Gravatar email"/>
                                    <TextFieldGroup
                                        type="password"
                                        value={this.state.password}
                                        name="password"
                                        onChange={this.onChange}
                                        error={errors.password}
                                        placeholder="Password"/>

                                    <TextFieldGroup
                                        type="password"
                                        value={this.state.password2}
                                        name="password2"
                                        onChange={this.onChange}
                                        error={errors.password2}
                                        placeholder="Confirmed Password"/>
                                    <input type="submit" className="btn btn-info btn-block mt-4"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {registerUser})(withRouter(Register));