import React from "react";
import { connect } from "react-redux";

import LoginForm from "./loginForm";
import { login } from "../actions/session";


const mapStateToProps = (state) => {
    return {
        authenticated: state.session.authenticated,
        username: state.session.username
    }
};

class SessionManager extends React.Component {

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

    render() {
        return (
            <div>
                <h2>Login</h2>
                <p>
                    You need to log in to use this service.
                </p>
                <LoginForm login={this.login}
                           username={this.inputs.username}
                           password={this.inputs.password}/>
            </div>
        );
    };
}

export default connect(mapStateToProps)(SessionManager);
