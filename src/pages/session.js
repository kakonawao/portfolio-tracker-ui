import React from "react";
import { connect } from "react-redux";

import LoginForm from "../components/loginForm";
import { login } from "../actions/session";


const mapStateToProps = (state) => {
    return {
        authenticated: state.session.authenticated,
        username: state.session.username
    }
};

export class SessionPage extends React.Component {

    constructor(props) {
        super(props);

        this.inputs = {
            username: React.createRef(),
            password: React.createRef()
        }
    }

    login = (event) => {
        event.preventDefault();
        const loginData = {
            username: this.inputs.username.current.value,
            password: this.inputs.password.current.value
        };
        this.props.dispatch(login(loginData));
    };

    renderUserData() {
        return (
            <div>
                <h2>Session</h2>
                <p>You are logged in as {this.props.username}.</p>
            </div>
        )
    }

    renderLoginForm() {
        return (
            <div>
                <h2>Session</h2>
                <LoginForm login={this.login}
                           username={this.inputs.username}
                           password={this.inputs.password}/>
            </div>
        );
    }

    render() {
        if (this.props.authenticated) {
            return this.renderUserData();
        }

        return this.renderLoginForm();
    };
}

export default connect(mapStateToProps)(SessionPage);
